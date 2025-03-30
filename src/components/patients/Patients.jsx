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

  const count = data.length;
  const totalPages = count ? Math.ceil(count / itemsPerPage) : 1;

  const handleMoreClick = (patient) => {
    setSelectedPatient(patient);
    setShowMoreModal(true);
  };

  const handleUpdate = (id) => {
    updatePatients({ id, status: "Done" });
  };

  const handlePageChange = (page) => {
    setSearchParams({ page });
  };

  if (isError) return <ErrorMessage errorMessage={error.message} />;

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = data.slice(startIndex, endIndex);

  return (
    <div className="bg-gray-100 p-5 shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold text-center mb-5">Patients List</h1>
      <div className="bg-white p-5 rounded-lg shadow-md">
        <div className="grid grid-cols-4 font-semibold border-b pb-2 mb-4">
          <h1>Name Surname</h1>
          <h1>Date of last visit</h1>
          <h1>Diagnosis type</h1>
          <h1>Status</h1>
        </div>
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

      <div className="mt-5 flex justify-center">
        <PatientPagination
          currentPage={currentPage}
          totalPages={totalPages}
          handlePageChange={handlePageChange}
        />
      </div>
    </div>
  );
}
