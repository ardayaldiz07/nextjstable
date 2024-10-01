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

    return (
        <div className="flex justify-center items-center gap-2 mt-4">
            <button onClick={handlePrevious} disabled={currentPage === 1} className="px-2 py-1 border">Previous</button>
            <span>{`Page ${currentPage} of ${totalPages}`}</span>
            <button onClick={handleNext} disabled={currentPage === totalPages} className="px-2 py-1 border">Next</button>
        </div>
    );
}