import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useGetPatients } from "../../hooks/useGetPatients";
import More from "./More";
import PatientsList from "./PatientsList";
import { useUpdatePatients } from "../../hooks/useUpdatePatients";
import PatientPagination from "./PatientPagination";
import PaginationSkeleton from "./PaginationSkeleton";
import ErrorMessage from "../ErrorMessage";

export default function Patients() {
  // Call hooks at the top level
  const { data, isLoading, isError, error } = useGetPatients();
  const { mutate: updatePatients } = useUpdatePatients();
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [showMoreModal, setShowMoreModal] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  const itemsPerPage = 3;
  const currentPage = parseInt(searchParams.get("page")) || 1;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  if (isLoading) return <PaginationSkeleton />;

  // Pagination BRRR
  const count = data.length;
  const totalPages = count ? Math.ceil(count / itemsPerPage) : 1;

  const handleMoreClick = (patient) => {
    setSelectedPatient(patient);
    setShowMoreModal(true);
  };

  const handleUpdate = (id) => {
    updatePatients({ id, status: "Done" });
  };

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
  if (isError) return <ErrorMessage errorMessage={error.message} />;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = data.slice(startIndex, endIndex);

  return (
    <div>
      <h1 className="text-[40px] p-3 font-bold">Patients list</h1>
      <div className="mt-10">
        {currentItems.map((item) => (
          <PatientsList
            key={item.id}
            item={item}
            handleUpdate={handleUpdate}
            handleMoreClick={handleMoreClick}
          />
        ))}
      </div>

      {selectedPatient && (
        <More
          showMoreModal={showMoreModal}
          setShowMoreModal={setShowMoreModal}
          patient={selectedPatient}
        />
      )}

      <PatientPagination
        currentPage={currentPage}
        totalPages={totalPages}
        handlePrevPage={handlePrevPage}
        handleNextPage={handleNextPage}
        handlePageChange={handlePageChange}
      />
    </div>
  );
}
