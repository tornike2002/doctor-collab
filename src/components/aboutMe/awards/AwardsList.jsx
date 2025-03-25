import React, { useState } from "react";
import AwardsMap from "./AwardsMap";
import deletes from "/imgs/del.png";
import circleIcon from "/imgs/cir.png";
import Frame from "/imgs/Frame.png";
import pen from "/imgs/pen.png";
import Modal from "../../Modal/Modal";
import { useUpdateAwards } from "../../../hooks/useUpdateAwards";
import AwardsEditForm from "./AwardsEditForm"; // Make sure this component exists
import { toast } from "react-toastify";

export default function AwardsList({ data, handleDelete }) {
  const [modalEdit, setModalEdit] = useState(false);
  const [selectedAward, setSelectedAward] = useState(null);

  const [errors, setErrors] = useState({});
  const { mutate: updateAwards } = useUpdateAwards();

  const handleEditClick = (award) => {
    setSelectedAward(award);
    setModalEdit(true);
  };

  const handleCloseEditModal = () => {
    setModalEdit(false);
    setSelectedAward(null);
    setErrors({});
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get("name");
    const date = formData.get("date");
    const awardedBy = formData.get("awardedBy");

    let validationErrors = {};

    if (!name) validationErrors.name = "Award name is required";
    if (!date) validationErrors.date = "Date is required";

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    if (
      name === selectedAward.name &&
      date === selectedAward.date &&
      awardedBy === selectedAward.awardedBy
    ) {
      return toast.error("No changes detected.");
    }

    updateAwards({
      id: selectedAward.id,
      name,
      date,
      awardedBy: awardedBy || null,
    });

    handleCloseEditModal();
  };

  return (
    <div>
      <div className="mt-[20px] flex flex-col gap-[10px]">
        <h1 className="text-[40px] font-bold">Awards</h1>
        {data.map((item) => (
          <div key={item.id}>
            <AwardsMap
              deletes={deletes}
              pen={pen}
              item={item}
              Frame={Frame}
              id={item.id}
              circleIcon={circleIcon}
              handleDelete={handleDelete}
              handleEditClick={handleEditClick}
            />
          </div>
        ))}

        {modalEdit && selectedAward && (
          <Modal>
            <AwardsEditForm
              handleEditSubmit={handleEditSubmit}
              handleCloseEditModal={handleCloseEditModal}
              errors={errors}
              award={selectedAward}
            />
          </Modal>
        )}
      </div>
    </div>
  );
}
