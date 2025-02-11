"use client"

import type React from "react"

interface PaginationProps {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  const maxPagesToShow = 5
  const pageNumbers = []
  let startPage = 1
  let endPage = totalPages

  if (totalPages <= maxPagesToShow) {
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i)
    }
  } else {
    if (currentPage <= Math.ceil(maxPagesToShow / 2)) {
      // near the start
      startPage = 1
      endPage = maxPagesToShow
    } else if (currentPage >= totalPages - Math.floor(maxPagesToShow / 2)) {
      // near the end
      startPage = totalPages - maxPagesToShow + 1
      endPage = totalPages
    } else {
      // middle pages
      startPage = currentPage - Math.floor(maxPagesToShow / 2)
      endPage = currentPage + Math.floor(maxPagesToShow / 2)
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i)
    }
  }

  const handlePrevPage = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1)
    }
  }

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1)
    }
  }

  const buttonClass = `
        text-[#4a4a4a] bg-gradient-to-b from-[#ffffff85] to-[#ffbf53] 
        border-2 border-[#d4c3a6] shadow-[2px_2px_0px_#8b7355,0_0_4px_rgba(0,0,0,0.1)] 
        hover:shadow-[1px_1px_0px_#8b7355,0_0_4px_rgba(0,0,0,0.1)] 
        hover:translate-x-[1px] hover:translate-y-[1px] 
        active:shadow-[0px_0px_0px_#8b7355,inset_2px_2px_4px_rgba(0,0,0,0.1)] 
        active:translate-x-[2px] active:translate-y-[2px] 
        transition-all duration-150 font-medium
        px-2 py-1 rounded-md text-sm md:text-base
    `

  const activeButtonClass = `
        shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1)] 
        translate-x-[2px] translate-y-[2px]
    `

  return (
    <nav className="transition-all duration-300 ease-in-out flex justify-center items-center mt-4 gap-2">
      <button
        onClick={handlePrevPage}
        disabled={currentPage === 1}
        className={`${buttonClass} ${currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""}`}
      >
        Previous
      </button>

      <ul className="flex items-center justify-center space-x-1 md:space-x-2">
        {totalPages > maxPagesToShow && startPage > 1 && (
          <li>
            <button onClick={() => onPageChange(1)} className={buttonClass}>
              1
            </button>
            {startPage > 2 && <span className="mx-1 text-sm md:text-base">...</span>}
          </li>
        )}
        {pageNumbers.map((page) => (
          <li key={page}>
            <button
              onClick={() => onPageChange(page)}
              className={`${buttonClass} ${currentPage === page ? activeButtonClass : ""}`}
            >
              {page}
            </button>
          </li>
        ))}

        {totalPages > maxPagesToShow && endPage < totalPages && (
          <li>
            {endPage < totalPages - 1 && <span className="mx-1 text-sm md:text-base">...</span>}
            <button onClick={() => onPageChange(totalPages)} className={buttonClass}>
              {totalPages}
            </button>
          </li>
        )}
      </ul>

      <button
        onClick={handleNextPage}
        disabled={currentPage === totalPages}
        className={`${buttonClass} ${currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""}`}
      >
        Next
      </button>
    </nav>
  )
}

export default Pagination

