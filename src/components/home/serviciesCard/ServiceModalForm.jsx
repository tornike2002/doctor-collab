import React, { useState } from "react";
import deletes from "/imgs/del.png";
import circleIcon from "/imgs/cir.png";
import Frame from "/imgs/Frame.png";
import pen from "/imgs/pen.png";
import Modal from "../../Modal/Modal";
import ExperienceEditForm from "../../aboutMe/Experience/ExperienceEditForm";
import useUpExperience from "../../../hooks/useUpExperience";

export default function ExperienceList({ data, handleDelete }) {
  const [modalEdit, setModalEdit] = useState(false);
  const [singleExperienceId, setSingleExperienceId] = useState(null);
  const [isPresent, setIsPresent] = useState(false);
  const [errors, setErrors] = useState({});
  const { mutate: upExperience } = useUpExperience();

  const handleEditClick = (id) => {
    setSingleExperienceId(id);
    setModalEdit(true);
  };

  const handleCloseEditModal = () => {
    setModalEdit(true);
    setSingleExperienceId(null);
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

    upExperience({
      id: singleExperienceId,
      place: updatedPlace,
      department: updatedDepartment,
      dateFrom: updatedDateFrom,
      dateTo: updatedDateTo || null,
      position: updatedPosition,
    });

    handleCloseEditModal();
  };

  return (
    <div className="mt-[20px]">
      {Array.isArray(data) &&
        data.map((item, index) => (
          <div
            key={index}
            className="relative flex justify-between items-center p-[16px] border rounded-lg hover:shadow-lg transition-shadow duration-300"
          >
            <div className="flex items-start w-full gap-4">
              <div className="flex flex-col items-center">
                <div className="bg-softBlue w-5 h-5 flex justify-center items-center rounded-lg">
                  <img src={circleIcon} alt="circle icon" />
                </div>
                <img src={Frame} className="max-h-[50px] mt-2" alt="vector" />
              </div>

              <div className="flex flex-col justify-center text-[9px] md:text-[15px] lg:text-[20px]">
                <h2 className="font-poppinsExtraBold leading-[135%] uppercase">
                  {item.place}
                </h2>
                <div className="flex gap-4">
                  <h3 className="font-poppinsExtraBold uppercase">
                    {item.department}
                  </h3>
                  <span className="font-heeboRegular opacity-50">
                    {`${
                      item.dateFrom ? item.dateFrom.slice(0, 4) : "Unknown"
                    } - ${item.dateTo ? item.dateTo.slice(0, 4) : "Present"}`}
                  </span>
                </div>
                <h4 className="font-heeboRegular opacity-50">
                  {item.position}
                </h4>
              </div>
            </div>

            <div className="flex gap-3 items-center">
              <img
                className="text-lightBlue hover:text-brightBlue cursor-pointer w-7 h-7 transition-transform duration-200 hover:scale-125"
                src={pen}
                onClick={() => handleEditClick(item.id)}
                alt="edit icon"
              />
              <img
                src={deletes}
                onClick={() => handleDelete(item.id)}
                className="text-lightBlue hover:text-brightBlue cursor-pointer w-7 h-7 transition-transform duration-200 hover:scale-125"
                alt="delete icon"
              />
            </div>
          </div>
        ))}

      {modalEdit && (
        <Modal>
          <ExperienceEditForm
            handleEditSubmit={handleEditSubmit}
            handleCloseEditModal={handleCloseEditModal}
            isPresent={isPresent}
            setIsPresent={setIsPresent}
            errors={errors}
          />
        </Modal>
      )}
    </div>
  );
}