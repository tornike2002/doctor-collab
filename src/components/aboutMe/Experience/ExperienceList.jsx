import React, { useState } from "react";
import deletes from "/imgs/del.png";
import circleIcon from "/imgs/cir.png";
import Frame from "/imgs/Frame.png";
import pen from "/imgs/pen.png";
import Modal from "../../Modal/Modal";
import ExperienceEditForm from "./ExperienceEditForm";
import useUpExperience from "../../../hooks/useUpExperience";
import ExperienceMap from "./ExperienceMap";

export default function ExperienceList({ data, handleDelete }) {
  const [modalEdit, setModalEdit] = useState(false);
  const [selectedExperience, setSelectedExperience] = useState(null);
  const [isPresent, setIsPresent] = useState(false);
  const [errors, setErrors] = useState({});
  const { mutate: upExperience } = useUpExperience();

  const handleEditClick = (experience) => {
    setSelectedExperience(experience);
    setModalEdit(true);
  };

  const handleCloseEditModal = () => {
    setModalEdit(false);
    setSelectedExperience(null);
    setErrors({});
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const updatedPlace = formData.get("place");
    const updatedDepartment = formData.get("department");
    const updatedDateFrom = formData.get("dateFrom");
    const updatedDateTo = isPresent ? null : formData.get("dateTo");
    const updatedPosition = formData.get("position");
 
    const { place, department, dateFrom, dateTo, position } =
      selectedExperience;

    let validationErrors = {};

    
    if (!updatedPlace) validationErrors.place = "Place is required";
    if (!updatedDepartment)
      validationErrors.department = "Department is required";
    if (!updatedDateFrom) validationErrors.dateFrom = "Start date is required";
    if (!updatedDateTo && !isPresent)
      validationErrors.dateTo = "End date is required or mark as Present";
    if (!updatedPosition) validationErrors.position = "Position is required";

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }


    const isPlaceChanged = updatedPlace !== place;
    const isDepartmentChanged = updatedDepartment !== department;
    const isDateFromChanged = updatedDateFrom !== dateFrom;
    const isDateToChanged = updatedDateTo !== (isPresent ? null : dateTo);
    const isPositionChanged = updatedPosition !== position;

    if (
      !isPlaceChanged &&
      !isDepartmentChanged &&
      !isDateFromChanged &&
      !isDateToChanged &&
      !isPositionChanged
    ) {
      return toast.error("No changes detected.");
    }

    upExperience({
      id: selectedExperience.id,
      place: updatedPlace,
      department: updatedDepartment,
      dateFrom: updatedDateFrom,
      dateTo: updatedDateTo || null,
      position: updatedPosition,
    });

    handleCloseEditModal();
  };

  return (
    <div className="mt-[20px]  flex  flex-col gap-[10px]">
      {data.map((item) => (
        <div key={item.id}>
          <ExperienceMap
            deletes={deletes}
            handleDelete={handleDelete}
            pen={pen}
            handleEditClick={handleEditClick}
            item={item}
            Frame={Frame}
            circleIcon={circleIcon}
          />
        </div>
      ))}

      {modalEdit && selectedExperience && (
        <Modal>
          <ExperienceEditForm
            handleEditSubmit={handleEditSubmit}
            handleCloseEditModal={handleCloseEditModal}
            isPresent={isPresent}
            setIsPresent={setIsPresent}
            errors={errors}
            experience={selectedExperience}
          />
        </Modal>
      )}
    </div>
  );
}
