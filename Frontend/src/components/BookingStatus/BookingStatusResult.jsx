import React from "react";
import { useLocation } from "react-router-dom";

const BookingStatusResult = () => {
  const location = useLocation();
  const bookings = location.state?.bookings;

  if (!bookings || bookings.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>No booking data found.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="bg-white shadow-lg rounded-xl p-6 w-full max-w-3xl">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Booking Status Details
        </h2>

        {bookings.map((booking) => (
          <div key={booking._id} className="border-b pb-4 mb-4">
            <p><strong>Booking ID:</strong> {booking.bookingId}</p>
            <p><strong>Applicant Name:</strong> {booking.applicantName}</p>
            <p><strong>Status:</strong> {booking.status}</p>
            <p><strong>Arrival:</strong> {new Date(booking.arrivalDateTime).toLocaleString()}</p>
            <p><strong>Departure:</strong> {new Date(booking.departureDateTime).toLocaleString()}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookingStatusResult;
