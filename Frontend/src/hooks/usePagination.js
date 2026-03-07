import {useState} from 'react';

const usePagination=(initialPage=1,initialLimit=6)=>{
    const [page,setPage]=useState(initialPage);
    const [limit,setLimit]=useState(initialLimit);
    const [totalPages,setTotalPages]=useState(1);
    const [totalRecords,setTotalRecords]=useState(0);

    const updatePagination=(data)=>{
        setTotalPages(data.totalPages || 1);
        setTotalRecords(data.totalRecords || 0);
     
    }

    return{
        page,
        setPage,
        limit,
        setLimit,
        totalPages,
        setTotalPages,
        totalRecords,
        setTotalRecords,
        updatePagination
    }


}

export default usePagination;