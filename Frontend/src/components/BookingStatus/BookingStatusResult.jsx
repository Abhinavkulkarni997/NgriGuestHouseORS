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
    <div className="min-h-screen  flex items-center justify-center bg-gray-100 dark:text-white dark:bg-gray-900">
      <div className="bg-white shadow-lg rounded-xl p-4 w-full max-w-3xl dark:text-white dark:bg-gray-800 ">
        <h2 className="text-lg xl:text-2xl md:text-3xl sm:text-sm font-bold mb-6 text-center bg-cyan-600 p-4 mt-0 text-white w-full rounded-t-lg dark:bg-gray-700">
          Booking Status Details
        </h2>
{/* 
        {bookings.map((booking) => (
          <div key={booking._id} className="border-b pb-4 mb-4 p-4">
            <p><strong>Booking ID:</strong> {booking.bookingId}</p>
            <p><strong>Applicant Name:</strong> {booking.applicantName}</p>
            <p><strong>Status:</strong> {booking.status}</p>
            <p><strong>Arrival:</strong> {new Date(booking.arrivalDateTime).toLocaleString()}</p>
            <p><strong>Departure:</strong> {new Date(booking.departureDateTime).toLocaleString()}</p>
          </div>
        ))} */}

        

        <div className="mt-6 border overflow-auto rounded-lg">
            <table className="w-full text-sm border-collapse ">
            <thead className="bg-gray-100 dark:bg-gray-700">
            <tr>
                <th className="border px-3 py-2 text-left">Sr No</th>
                <th className="border px-3 py-2 text-left">Booking ID</th>
                 <th className="border px-3 py-2 text-left">Applicant Name</th>
                <th className="border px-3 py-2 text-left">Arrival Date</th>
                <th className="border px-3 py-2 text-left">Departure Date</th>
                <th className="border px-3 py-2 text-left">Status</th>
                </tr>
           
                </thead>
                {bookings.map((booking,index)=>(
                    <tbody key={index}>
                    <tr>
                        <td className="border px-3 py-2">{index+1}</td>
                        <td className="border px-3 py-2"> {booking.bookingId}</td>
                        <td className="border px-3 py-2">{booking.applicantName}</td>
                        <td className="border px-3 py-2">{new Date(booking.arrivalDateTime).toLocaleDateString()}</td>
                        <td className="border px-3 py-2">{new Date(booking.departureDateTime).toLocaleDateString()}</td>
                        <td className="border px-3 py-2">{booking.status}</td>
                    </tr>
                </tbody>

                ))}
                
            </table>
        </div>
      </div>
    </div>
  );
};

export default BookingStatusResult;
