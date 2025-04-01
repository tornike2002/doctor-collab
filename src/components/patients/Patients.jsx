import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useUpdatePatients } from "../../hooks/useUpdatePatients";
import { usePatientsPagination } from "../../hooks/usePatientsPagination";
import More from "./More";
import PatientsList from "./PatientsList";
import PaginationSkeleton from "./PaginationSkeleton";
import ErrorMessage from "../ErrorMessage";
import PatientPagination from "./PatientPagination";
export default function Patients() {
  const { mutate: updatePatients } = useUpdatePatients();
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [showMoreModal, setShowMoreModal] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = parseInt(searchParams.get("page")) || 1;
  const itemsPerPage = 3;

  const { data, isLoading, isError, error } = usePatientsPagination(
    currentPage,
    itemsPerPage
  );

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  if (isLoading) return <PaginationSkeleton />;
  if (isError)
    return (
      <ErrorMessage errorMessage={error?.message || "An error occurred"} />
    );

  const patients = data?.data || [];
  const totalPages = Math.ceil(data.count / itemsPerPage);

  const handleMoreClick = (patient) => {
    setSelectedPatient(patient);
    setShowMoreModal(true);
  };

  const handleUpdate = (id) => {
    updatePatients({ id, status: "Done" });
  };

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
        {patients.map((item) => (
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
          totalPages={totalPages}
          searchParams={searchParams}
          setSearchParams={setSearchParams}
        />
      </div>
    </div>
  );
}
