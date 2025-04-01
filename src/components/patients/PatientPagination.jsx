import React from "react";

export default function PatientPagination({
  totalPages,
  setSearchParams,
  searchParams,
}) {
  const currentPage = parseInt(searchParams.get("page")) || 1;

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setSearchParams((prevParams) => {
        const updatedParams = new URLSearchParams(prevParams);
        updatedParams.set("page", newPage);
        return updatedParams;
      });
    }
  };

  const getPageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 5;
    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);
    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }
    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }
    return pages;
  };

  return (
    <div className="flex justify-center mt-4 items-center gap-2">
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-2 py-1 border rounded"
      >
        Prev
      </button>

      {getPageNumbers().map((page) => (
        <button
          key={page}
          onClick={() => handlePageChange(page)}
          className={`px-3 py-1 border rounded ${
            currentPage === page ? "bg-blue-600 text-white" : "bg-white"
          }`}
        >
          {page}
        </button>
      ))}

      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`px-2 py-1 rounded-md border border-gray-300 bg-white text-gray-700 transition-all duration-300 ease-in-out ${
          currentPage === totalPages
            ? "opacity-50 cursor-not-allowed"
            : "hover:bg-gray-100 hover:border-gray-400 hover:shadow-sm"
        }`}
      >
        Next
      </button>
    </div>
  );
}
