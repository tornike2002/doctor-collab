import React from "react";

export default function PatientPagination({
  currentPage,
  totalPages,
  handlePrevPage,
  handleNextPage,
  handlePageChange,
}) {
  const pageNumbers = [...Array(totalPages).keys()].map((i) => i + 1);
  return (
    <div>
      {" "}
      <div className="flex justify-center mt-8">
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-gray-300 text-black rounded-lg mr-2"
          aria-label="Go to previous page"
        >
          Prev
        </button>

        {totalPages > 1 &&
          pageNumbers.map((page) => (
            <button
              key={page}
              onClick={() => handlePageChange(page)}
              className={`px-4 py-2 ${
                currentPage === page
                  ? "bg-blue-500 text-white"
                  : "bg-gray-300 text-black"
              } rounded-lg mr-2`}
              aria-label={`Go to page ${page}`}
            >
              {page}
            </button>
          ))}

        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-gray-300 text-black rounded-lg ml-2"
          aria-label="Go to next page"
        >
          Next
        </button>
      </div>
    </div>
  );
}
