"use client";

import React from 'react';

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
    currentPage,
    totalPages,
    onPageChange,
}) => {
    const maxPagesToShow = 5;
    const pageNumbers = [];
    let startPage = 1;
    let endPage = totalPages;

    if (totalPages <= maxPagesToShow) {
         for (let i = 1; i <= totalPages; i++) {
                pageNumbers.push(i);
         }
    } else{
        if (currentPage <= Math.ceil(maxPagesToShow/2)) {
            // near the start
             startPage = 1;
             endPage = maxPagesToShow;
         } else if (currentPage >= totalPages - Math.floor(maxPagesToShow/2)){
            // near the end
            startPage = totalPages - maxPagesToShow + 1;
            endPage = totalPages
         }
          else {
            // middle pages
              startPage = currentPage - Math.floor(maxPagesToShow / 2);
             endPage = currentPage + Math.floor(maxPagesToShow/2);
           }

            for (let i = startPage; i <= endPage; i++) {
               pageNumbers.push(i);
           }
       }



    const handlePrevPage = () => {
        if (currentPage > 1) {
            onPageChange(currentPage - 1);
        }
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            onPageChange(currentPage + 1);
        }
    };


    return (
       <nav className="transition-all duration-300 ease-in-out flex justify-center items-center mt-4">
            <button
                onClick={handlePrevPage}
                disabled={currentPage === 1}
                className={`px-2 py-1 mx-1 rounded-md text-sm md:text-base ${
                    currentPage === 1 ? 'bg-gray-200 text-gray-500 cursor-not-allowed' : 'bg-[#FEE8C2] hover:bg-[#dbbb84]'
                }`}
            >
                Previous
            </button>

            <ul className="flex items-center justify-center space-x-1 md:space-x-2">
                {totalPages > maxPagesToShow && startPage > 1 && (
                    <li>
                        <button
                            onClick={() => onPageChange(1)}
                            className={`px-2 py-1 rounded-md text-sm md:text-base transition-colors duration-300 bg-gray-100 hover:bg-gray-200 text-gray-800`}
                        >
                            1
                        </button>
                         {startPage > 2 && <span className="mx-1 text-sm md:text-base">...</span>}
                    </li>
                )}
                {pageNumbers.map((page) => (
                    <li key={page}>
                        <button
                            onClick={() => onPageChange(page)}
                            className={`px-2 py-1 rounded-md text-sm md:text-base transition-colors duration-300 ${
                                currentPage === page
                                    ? "bg-[#dbbb84] text-white"
                                    : "bg-gray-100 hover:bg-gray-200 text-gray-800"
                            }`}
                        >
                            {page}
                        </button>
                    </li>
                ))}

                {totalPages > maxPagesToShow && endPage < totalPages && (
                    <li>
                        {endPage < totalPages -1 && <span className="mx-1 text-sm md:text-base">...</span>}
                        <button
                            onClick={() => onPageChange(totalPages)}
                             className={`px-2 py-1 rounded-md text-sm md:text-base transition-colors duration-300 bg-gray-100 hover:bg-gray-200 text-gray-800`}
                        >
                            {totalPages}
                        </button>
                    </li>
                )}
            </ul>

            <button
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
                className={`ml-1 md:ml-2 transition-all duration-300 ease-in-out px-2 py-1 rounded-md text-sm md:text-base ${
                    currentPage === totalPages ? 'bg-gray-200 text-gray-500 cursor-not-allowed' : 'bg-[#FEE8C2] hover:bg-[#dbbb84]'
                }`}
            >
                Next
            </button>
        </nav>
    );
};

export default Pagination;