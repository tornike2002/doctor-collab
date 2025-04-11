import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import BlogCard from "./BlogCard";
import BlogPagination from "./BlogPagination";

export default function BlogList({
  data,
  handleDelete,
 
}) {

  const itemsPerPage = 3;
  const [searchParams, setSearchParams] = useSearchParams();


  const currentPage = parseInt(searchParams.get("page")) || 1;

  const count = data.length; 
  const totalPages = count ? Math.ceil(count / itemsPerPage) : 1;

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setSearchParams({ page: currentPage + 1 });
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setSearchParams({ page: currentPage - 1 });
    }
  };

  const handlePageChange = (page) => {
    setSearchParams({ page });
  };



  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

 
const startIndex = (currentPage - 1) * itemsPerPage;
const endIndex = startIndex + itemsPerPage;
const currentItems = data.slice(startIndex, endIndex);


 
  return (
    <div className="md:px-[40px]">
      <h1 className="md:text-left md:text-[64px] text-[44px] text-center font-bold text-[#000] font-poppins mb-[3rem] mt-[1rem]">
        Suggested For You
      </h1>

      <div className="w-full">
        <div className="grid grid-cols-1 gap-[8rem] justify-items-center w-full">
          {currentItems.map((item) => (
            <BlogCard
              data={item}
              key={item.id}
              handleDelete={handleDelete}
            
            />
          ))}
        </div>
      </div>

      <BlogPagination
        currentPage={currentPage}
        totalPages={totalPages}
        handlePrevPage={handlePrevPage}
        handleNextPage={handleNextPage}
        handlePageChange={handlePageChange}
      />

      <div className="md:px-[40px]">
        <h3 className="md:text-left md:text-[64px] text-[44px] text-center font-bold text-[#000] font-poppins my-[5rem]">
          Suggested For You
        </h3>
      </div>
    </div>
  );
}
