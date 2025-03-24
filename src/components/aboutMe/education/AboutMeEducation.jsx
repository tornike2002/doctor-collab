import React, { useState } from "react";
import useGetEducation from "../../../hooks/useGetEducation";
import useAddAboutMeEducation from "../../../hooks/useAddAboutMeEducation";
import EducationList from "./EducationList";
import EducationAdd from "./EducationAdd";
import EducationForm from "./EducationForm";
import Modal from "../../Modal/Modal";

import { useDeleteAboutMeEducation } from "../../../hooks/useDeleteAboutMeEducation";

import ErrorMessage from "../../ErrorMessage";
import Skeleton from "./Skeleton";

export default function AboutMeEducation() {
  const { data, error, isLoading, isError } = useGetEducation();
  const { mutate: addEducation } = useAddAboutMeEducation();
  const [modalToggle, setModalToggle] = useState(false);
  const [isPresent, setIsPresent] = useState(false);
  const [errors, setErrors] = useState({});
  const { mutate: deleteEducation } = useDeleteAboutMeEducation();
  const handleClose = () => {
    setModalToggle(false);
    setIsPresent(false);
    setErrors({});
  };
  const handleDelete = (id) => {
    deleteEducation(id);
  };
  const handleAddSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newInstitution = formData.get("uni");
    const newDegree = formData.get("degree");
    const newDateFrom = formData.get("dateFrom");
    const newDateTo = isPresent ? null : formData.get("dateTo");

    let validationErrors = {};
    if (!newInstitution)
      validationErrors.institution = "Institution is required";
    if (!newDegree) validationErrors.degree = "Degree is required";
    if (!newDateFrom) validationErrors.dateFrom = "Start date is required";
    if (!newDateTo && !isPresent)
      validationErrors.dateTo = "End date is required or mark as Present";

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    addEducation({
      dateTo: newDateTo,
      dateFrom: newDateFrom,
      uni: newInstitution,
      degree: newDegree,

      isCurrent: isPresent,
    });

    handleClose();
  };

  if (isLoading) {
    return <Skeleton />;
  }

  if (isError) return <ErrorMessage errorMessage={error.message} />;
  console.log(data);
  return (
    <div>
      <EducationList handleDelete={handleDelete} data={data} />
      <EducationAdd setModalToggle={setModalToggle} />
      {modalToggle && (
        <Modal onClose={handleClose}>
          <EducationForm
            handleAddSubmit={handleAddSubmit}
            isPresent={isPresent}
            setIsPresent={setIsPresent}
            errors={errors}
            handleClose={handleClose}
          />
        </Modal>
      )}
    </div>
  );
}
