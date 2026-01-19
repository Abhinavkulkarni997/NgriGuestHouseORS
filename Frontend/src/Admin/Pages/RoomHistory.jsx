import React,{useState,useEffect} from 'react';
import {useParams} from 'react-router-dom';
import api from '../../api/bookingapi';

const RoomHistory=()=>{
    const {roomId}=useParams();
    const [roomHistory,setRoomHistory]=useState([roomId]);
    const [loading,setLoading]=useState(true);

    useEffect(()=>{
        api.get("/admin/${roomId}/history")
        .then((res)=>res.data)
        .catch((error)=>console.error(error))
        .finally(()=>setLoading(false));

    },[roomId]);

    if(loading){return <p>Loading Room History....</p>}

    return(
        <div className=''>

        </div>
    )
}
export default RoomHistory;