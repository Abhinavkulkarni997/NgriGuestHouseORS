/**
 * safe-roomnumber-migration.js
 * Run with: node safe-roomnumber-migration.js
 */

const mongoose = require("mongoose");

// ⚠️ Change this to your production MongoDB URI
const MONGO_URI = "mongodb://localhost:27017/guestHouseDB";

const RoomSchema = new mongoose.Schema({
  roomNumber: mongoose.Schema.Types.Mixed, // currently string
  isActive: Boolean,
}, { collection: "rooms" });

const BookingSchema = new mongoose.Schema({
  allocatedRooms: [
    {
      _id: mongoose.Schema.Types.ObjectId,
      roomNumber: mongoose.Schema.Types.Mixed, // currently string
    }
  ]
}, { collection: "bookings" });

const Room = mongoose.model("Room", RoomSchema);
const Booking = mongoose.model("Booking", BookingSchema);

async function migrateRoomNumbers() {
  try {
    await mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log("Connected to MongoDB");

    // 1️⃣ Migrate Rooms
    const rooms = await Room.find();
    console.log(`Found ${rooms.length} rooms`);
    for (let room of rooms) {
      const num = Number(room.roomNumber);
      if (!isNaN(num)) {
        if (room.roomNumber !== num) {
          await Room.updateOne({ _id: room._id }, { $set: { roomNumber: num } });
          console.log(`Room ${room._id} updated: ${room.roomNumber} → ${num}`);
        }
      } else {
        console.warn(`Skipping room ${room._id}, invalid roomNumber: ${room.roomNumber}`);
      }
    }

    // 2️⃣ Migrate Bookings (allocatedRooms.roomNumber)
    const bookings = await Booking.find({ allocatedRooms: { $exists: true, $ne: [] } });
    console.log(`Found ${bookings.length} bookings with allocated rooms`);
    for (let booking of bookings) {
      let updated = false;
      const newRooms = booking.allocatedRooms.map(r => {
        const num = Number(r.roomNumber);
        if (!isNaN(num) && r.roomNumber !== num) {
          updated = true;
          return { ...r.toObject(), roomNumber: num };
        }
        return r;
      });
      if (updated) {
        await Booking.updateOne({ _id: booking._id }, { $set: { allocatedRooms: newRooms } });
        console.log(`Booking ${booking._id} allocatedRooms updated`);
      }
    }

    // 3️⃣ Rebuild Room Index (ensure uniqueness)
    const indexes = await Room.collection.getIndexes({ full: true });
    if (indexes.some(i => i.name === "roomNumber_1")) {
      await Room.collection.dropIndex("roomNumber_1");
      console.log("Dropped old roomNumber index");
    }
    await Room.collection.createIndex({ roomNumber: 1 }, { unique: true });
    console.log("Created unique index on roomNumber");

    console.log("✅ Migration complete");
    process.exit(0);
  } catch (err) {
    console.error("Migration failed", err);
    process.exit(1);
  }
}

migrateRoomNumbers();
