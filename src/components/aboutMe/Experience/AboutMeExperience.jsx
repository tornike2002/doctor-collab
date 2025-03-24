import React, { useState } from "react";
import useGetExperience from "../../../hooks/useGetExperience";
import ExperienceList from "./ExperienceList";
import useAddAboutMeExperience from "../../../hooks/useAddAboutMeExperience";
import ExperienceForm from "./ExperienceForm";
import Modal from "../../Modal/Modal";
import { useDeleteAboutMeExperience } from "../../../hooks/apiDeleteAboutMeExperience";
import ExperienceSkeleton from "./ExperienceSkeleton";
import ExperienceAdd from "./ExperienceAdd";
import ErrorMessage from "../../ErrorMessage";

export default function AboutMeExperience() {
  const { data, error, isLoading, isError } = useGetExperience();

  const { mutate: addExperience } = useAddAboutMeExperience();
  const { mutate: deleteExperience } = useDeleteAboutMeExperience();

  const [isPresent, setIsPresent] = useState(false);
  const [errors, setErrors] = useState({});
  const [modalToggle, setModalToggle] = useState(false);

  if (isLoading) return <ExperienceSkeleton />;
  if (isError) return <ErrorMessage errorMessage={error.message} />;

  const handleAddSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newPlace = formData.get("place");
    const newDepartment = formData.get("department");
    const newDateFrom = formData.get("dateFrom");
    const newDateTo = isPresent ? null : formData.get("dateTo");
    const newPosition = formData.get("position");

    let validationErrors = {};
    if (!newPlace) validationErrors.place = "Place is required";
    if (!newDepartment) validationErrors.department = "Department is required";
    if (!newDateFrom) validationErrors.dateFrom = "Start date is required";
    if (!newDateTo && !isPresent)
      validationErrors.dateTo = "End date is required or mark as Present";
    if (!newPosition) validationErrors.position = "Position is required";

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    addExperience({
      dateTo: newDateTo,
      dateFrom: newDateFrom,
      place: newPlace,
      department: newDepartment,
      position: newPosition,
    });

    handleClose();
    setErrors({});
  };

  const handleDelete = (id) => {
    deleteExperience(id);
  };

  const handleClose = () => {
    setModalToggle(false);

    setErrors({});
  };

  return (
    <div>
      <ExperienceList id={data.id} handleDelete={handleDelete} data={data} />
      <ExperienceAdd setModalToggle={setModalToggle} />

      {modalToggle && (
        <Modal>
          <ExperienceForm
            handleAddSubmit={handleAddSubmit}
            isPresent={isPresent}
            setIsPresent={setIsPresent}
            errors={errors}
            handleClose={handleClose}
          />
          {/* <button onClick={handleClose}>Close</button> */}
        </Modal>
      )}
    </div>
  );
}
