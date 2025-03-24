import EducationMap from "./EducationMap";
import deletes from "/imgs/del.png";
import circleIcon from "/imgs/cir.png";
import Frame from "/imgs/Frame.png";
import pen from "/imgs/pen.png";
import useUpdateAboutMeEducation from "../../../hooks/useUpdateAboutMeEducation";
import { useState } from "react";
import Modal from "../../Modal/Modal";
import EducationEditForm from "./EducationEditForm";
import { toast } from "react-toastify";
export default function EducationList({ data, handleDelete }) {
  const [modalEdit, setModalEdit] = useState(false);
  const [selectedExperience, setSelectedExperience] = useState(null);
  const [isPresent, setIsPresent] = useState(false);
  const [errors, setErrors] = useState({});
  const { mutate: apiUpEducation } = useUpdateAboutMeEducation();

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
    const updatedPlace = formData.get("uni");
    const updatedDepartment = formData.get("degree");
    const updatedDateFrom = formData.get("dateFrom");
    const updatedDateTo = isPresent ? null : formData.get("dateTo");

    const { uni, degree, dateFrom, dateTo } = selectedExperience;

    let validationErrors = {};

    if (!updatedPlace) validationErrors.place = "Place is required";
    if (!updatedDepartment)
      validationErrors.department = "Department is required";
    if (!updatedDateFrom) validationErrors.dateFrom = "Start date is required";
    if (!updatedDateTo && !isPresent)
      validationErrors.dateTo = "End date is required or mark as Present";

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const isPlaceChanged = updatedPlace !== uni;
    const isDepartmentChanged = updatedDepartment !== degree;
    const isDateFromChanged = updatedDateFrom !== dateFrom;
    const isDateToChanged = updatedDateTo !== (isPresent ? null : dateTo);

    if (
      !isPlaceChanged &&
      !isDepartmentChanged &&
      !isDateFromChanged &&
      !isDateToChanged
    ) {
      return toast.error("No changes detected.");
    }

    apiUpEducation({
      id: selectedExperience.id,
      uni: updatedPlace,
      degree: updatedDepartment,
      dateFrom: updatedDateFrom,
      dateTo: updatedDateTo || null,
    });

    handleCloseEditModal();
  };
  return (
    <div className="mt-[20px] flex flex-col gap-[10px]">
      <h1 className="text-[40px] font-bold">Education</h1>
      {data.map((item) => (
        <div key={item.id}>
          <EducationMap
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

      {modalEdit && selectedExperience && (
        <Modal>
          <EducationEditForm
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
