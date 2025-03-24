import React, { useState } from "react";
import SkilMap from "./SkilMap";
import deletes from "/imgs/del.png";
import circleIcon from "/imgs/cir.png";
import Frame from "/imgs/Frame.png";
import pen from "/imgs/pen.png";
import Modal from "../../Modal/Modal";

import { useUpSkills } from "../../../hooks/useUpSkills";

import { toast } from "react-toastify";

import SkillEdit from "./SkillEdit";
export default function SkillList({ data, handleDelete }) {
  const [modalEdit, setModalEdit] = useState(false);
  const [selectedExperience, setSelectedExperience] = useState(null);
  const [isPresent, setIsPresent] = useState(false);
  const [errors, setErrors] = useState({});
  const { mutate: upExperience } = useUpSkills();

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
    const updatedPlace = formData.get("skil");
    const updatedDepartment = formData.get("description");

    const { skil, description } = selectedExperience;

    let validationErrors = {};

    if (!updatedPlace) validationErrors.skil = "Place is required";
    if (!updatedDepartment)
      validationErrors.description = "Department is required";

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const isPlaceChanged = updatedPlace !== skil;
    const isDepartmentChanged = updatedDepartment !== description;

    if (!isPlaceChanged && !isDepartmentChanged) {
      return toast.error("No changes detected.");
    }

    upExperience({
      id: selectedExperience.id,
      skil: updatedPlace,
      description: updatedDepartment,
    });

    handleCloseEditModal();
  };
  return (
    <div className="flex flex-col gap-[10px]">
      <h1 className=" text-[40px]  font-bold ">Skills</h1>
      {data.map((item) => (
        <div key={item.id}>
          <SkilMap
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
          <SkillEdit
            handleEditSubmit={handleEditSubmit}
            handleCloseEditModal={handleCloseEditModal}
            errors={errors}
            experience={selectedExperience}
          />
        </Modal>
      )}
    </div>
  );
}
