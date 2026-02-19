// code created on 17-02-2026 
import React from "react";
import { useSearchParams } from "react-router-dom";
import { useLocation } from "react-router-dom";

const BookingStatusResult = () => {
    const [searchParams]=useSearchParams();
    const email=searchParams.get("email");
    const mobile=searchParams.get("mobile");
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
