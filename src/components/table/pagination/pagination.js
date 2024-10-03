import React from 'react';

export default function Pagination({ currentPage, totalPages, onPageChange }) {
    const handlePrevious = () => {
        if (currentPage > 1) {
            onPageChange(currentPage - 1);
        }
    };

    const handleNext = () => {
        if (currentPage < totalPages) {
            onPageChange(currentPage + 1);
        }
    };

    const handlePageChange = (val) =>{
        onPageChange(Number(val))
    }


    return (
        <div className="flex justify-center items-center gap-2 mt-4 ">
            <button onClick={handlePrevious} disabled={currentPage === 1} className="px-2 bg-gray-900 py-1 shadow-lg border text-white rounded-lg transition-all duration-300 hover:bg-gray-700">Previous</button>
            {
                [currentPage-2,currentPage-1,currentPage,currentPage+1,currentPage+2].map(item=>{
                    if(item>0 &&  item < totalPages){
                        return(
                            <span className={item == currentPage ? 'underline cursor-pointer':'underline-none cursor-pointer'} onClick={()=>handlePageChange(item)}> {item} </span>
                        )
                    }
                }
                )
            }
            {/* <span>{`Page ${currentPage} of ${totalPages}`}</span> */}
            <button onClick={handleNext} disabled={currentPage === totalPages} className="px-2 py-1 bg-gray-900 text-white  border transition-all duration-300 rounded-lg hover:bg-gray-700">Next</button>
        </div>
    );
}