import React, { useState } from "react";
import { useGetAwards } from "../../../hooks/useGetAwards";
import AwardsList from "./AwardsList";
import { useDeleteAwards } from "../../../hooks/useDeleteAwards";
import AwardsForm from "./AwardsForm";
import { useAddAwards } from "../../../hooks/useAddAwards";
import Modal from "../../Modal/Modal";
import AddAwardsBt from "./AddAwardsBt";
import AwardSkeleton from "./AwardSkeleton";
import ErrorMessage from "../../ErrorMessage";

export default function AboutMeAwards() {
  const { data, isError, isLoading, error } = useGetAwards();
  const { mutate: addAward } = useAddAwards();
  const [errors, setErrors] = useState({});
  const { mutate: deleteAwards } = useDeleteAwards();
  const [modalToggle, setModalToggle] = useState(false);

  const handleAddAward = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get("name");
    const date = formData.get("date");
    const awardedBy = formData.get("awardedBy");

    let validationErrors = {};
    if (!name) validationErrors.name = "name name is required";
    if (!date) validationErrors.date = "Date is required";
    if (!date) validationErrors.awardedBy = "awardedBy is required";
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    addAward({
      name,
      date,
      awardedBy: awardedBy,
    });

    handleClose();
  };

  const handleDelete = (id) => {
    deleteAwards(id);
  };

  const handleClose = () => {
    setModalToggle(false);
    setErrors({});
  };

  if (isLoading) return <AwardSkeleton />;
  if (isError) return <ErrorMessage errorMessage={error.message} />;

  return (
    <div className="awards-section">
      <AwardsList data={data} handleDelete={handleDelete} />
      <AddAwardsBt setModalToggle={setModalToggle} />

      {modalToggle && (
        <Modal onClose={handleClose}>
          <AwardsForm
            handleAddAward={handleAddAward}
            errors={errors}
            handleClose={handleClose}
          />
        </Modal>
      )}
    </div>
  );
}
