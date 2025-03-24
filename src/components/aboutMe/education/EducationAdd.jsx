import React from "react";

export default function EducationAdd({ setModalToggle }) {
  return (
    <div className="flex justify-center mt-[20px]">
      <button
        className="bg-[#2148c9] p-[10px] rounded-full text-[20px] text-[#fff] "
        onClick={() => setModalToggle(true)}
      >
        + Add Experience
      </button>
    </div>
  );
}
