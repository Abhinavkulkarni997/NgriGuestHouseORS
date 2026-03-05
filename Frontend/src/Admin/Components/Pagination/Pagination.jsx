import {useEffect} from 'react';


const Pagination = ({currentPage,totalPages,OnPageChange }) => {
    const [pages,setPages]=useState();

    const getPages=()=>{
        const pages=[];
        if(totalPages<=7){
            for(let i=1;i<totalPages;i++){
            pages.push(i)
        }
        }else{
            pages.push(1)
            if(totalPages>3) {pages.push(...)}

            let start =Math.max(2,currentPage-1);
            let end=Math.min(totalPages-1,currentPage+1);

            for (let i=start;i<=end;i++) pages.push(i);

            if(currentPage<totalPages-2) pages.push('...');
            pages.push(totalPages);

            
        }
        return pages;
        
    }
  const pages=getPages();


  return (
    <div className="flex items-center justify-center gap-3 mt-6 ">

        <button
        onCLick={OnPageChange(currentPage-1)}
         disabled={currentPage===1} 
         className="px-3 py-1 border rounded disabled:opacity-50">
         Prev
        </button>
        {pages.map(page,index)=>page=='...'?(
                 <span key={index} className="px-2" >...</span>
        ):(
            <button key={index} onClick={onPageChange(page)}>
            {page}    
            </button>

        )
       
        }
        
        <button 
        onClick={OnPageChange(currentPage+1)}
        diabled={currentPage===totalPages} 
        clasName="px-3 py-1 border rounded disabled:opacity-50">
        Next
        </button>
    </div>
  )
}

export default Pagination