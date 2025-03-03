import React from "react";
import deleteIcon from "/public/imgs/delete_sign-256.png";

export default function ShowInputForm({
  inputValue,
  setInputValue,
  addContent,
  setAddContent,
  submitServiceAdd,
  handleEditClick,
  showInput,
  fileRef,
  handleImagePreview,
}) {
  if (!showInput) return null;

  return (
    <div className="flex justify-end pr-4">
      <form
        className="flex flex-col space-y-2 items-start"
        onSubmit={submitServiceAdd}
      >
        <div className="flex gap-3 items-center">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Enter service title"
            className="border rounded px-2 py-1"
          />
          <img
            onClick={handleEditClick}
            className="w-[2rem] cursor-pointer"
            src={deleteIcon}
            alt="Delete"
          />
        </div>
        <textarea
          value={addContent}
          onChange={(e) => setAddContent(e.target.value)}
          placeholder="Enter Content"
          className="border rounded px-2 py-1"
        />
        <div className="flex items-center">
          <input type="file" className="hidden" />
          <input
            type="file"
            ref={fileRef}
            onChange={handleImagePreview}
            accept="image/*"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-400 px-4 py-1 rounded text-white"
        >
          Add Service
        </button>
      </form>
    </div>
  );
}
