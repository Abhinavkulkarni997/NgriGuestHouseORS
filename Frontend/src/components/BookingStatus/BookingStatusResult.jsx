// code created on 17-02-2026 
import React,{useState,useEffect} from "react";
import { useSearchParams } from "react-router-dom";
import api from '../../api/bookingapi';

const BookingStatusResult = () => {
    const [searchParams]=useSearchParams();
    const email=searchParams.get("email");
    const mobile=searchParams.get("mobile");

    const [bookings,setBookings]=useState([]);
    const [error,setError] = useState("");
    const [loading,setLoading] = useState(true);


    useEffect(()=>{
        const fetchStatus=async()=>{
            try{
                const response=await api.get('/booking/status',{
                    params:{email,mobile},
                });
                setBookings(response.data.data);
            }catch(error){
               setError(error.response?.data?.message || "No booking found");

            }finally{
                setLoading(false);
            }
        }
        if(email && mobile){
        fetchStatus();
    }else{
        setError("Invalid Request");
        setLoading(false);
    }
    },[email,mobile]);

    


  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Loading....</p>
      </div>
    );
  }

  
  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-red-600">{error}</p>
      </div>
    );
  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6 dark:text-white dark:bg-gray-900">
      <div className="bg-white shadow-lg rounded-xl  w-full max-w-3xl dark:text-white dark:bg-gray-800 ">
        <h2 className="text-2xl font-bold mb-6 text-center bg-cyan-600 p-4 mt-0 text-white w-full rounded-t-lg dark:bg-gray-700">
          Booking Status Details
        </h2>

        {bookings.map((booking) => (
          <div key={booking._id} className="border-b pb-4 mb-4 p-4">
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
