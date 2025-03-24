import React, { useState } from "react";

import { useGetSkills } from "../../../hooks/useGetSkills";
import SkillList from "./SkillList";
import { useDeleteSkills } from "../../../hooks/useDeleteSkills";
import useAddSkills from "../../../hooks/useAddSkills";
import SkillAdd from "./SkillAdd";
import Modal from "../../Modal/Modal";
import SkillForm from "./SkillForm";
export default function AboutMeSkil() {
  const { data, error, isLoading, isError } = useGetSkills();
  const { mutate: addSkills } = useAddSkills();
  const [errors, setErrors] = useState({});
  const { mutate: deleteSkills } = useDeleteSkills();
  const [modalToggle, setModalToggle] = useState(false);

  const handleAddSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newskil = formData.get("skil");
    const newdescription = formData.get("description");

    let validationErrors = {};
    if (!newskil) validationErrors.skil = "skil is required";
    if (!newdescription)
      validationErrors.description = "description is required";

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    addSkills({
      skil: newskil,
      description: newdescription,
    });

    handleClose();
    setErrors({});
  };

  // Delete functionality

  if (isLoading) return <p>loading...</p>;
  if (isError) return <p>hadad</p>;
  const handleDelete = (id) => {
    deleteSkills(id);
  };
  const handleClose = () => {
    setModalToggle(false);

    setErrors({});
  };
  return (
    <div>
      <SkillList handleDelete={handleDelete} data={data} />
      <SkillAdd setModalToggle={setModalToggle} />

      {modalToggle && (
        <Modal>
          <SkillForm
            handleAddSubmit={handleAddSubmit}
            errors={errors}
            handleClose={handleClose}
          />
        
        </Modal>
      )}
    </div>
  );
}
