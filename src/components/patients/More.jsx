import React from "react";
import Modal from "../Modal/Modal";

export default function More({ patient, showMoreModal, setShowMoreModal }) {
  console.log(patient);
  const closeModal = () => {
    setShowMoreModal(false);
  };

  return (
    <div>
      {showMoreModal && (
        <Modal>
          <div className="fixed inset-0 flex items-center justify-center bg-blue bg-opacity-50 z-50">
            <div className="relative bg-lightSkyBlue bg-[#1b5eaa] rounded-lg shadow-lg p-8 w-[90%] max-w-md flex flex-col gap-2">
              <div className="pb-4 border-b border-gray-300 mb-4">
                <div className="flex flex-col gap-4 my-4">
                  <div className="flex items-center gap-2">
                    <p className="text-white font-bold text-lg">
                      {patient.user_name}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <p className="text-gray-200 font-medium text-base">
                      Patient ID: {patient.id}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 ">
                    <p className="text-gray-200 font-medium text-base">
                      Last Visit Date: {patient.date}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col gap-4 mt-4">
                  <div className="flex items-center gap-2">
                    <p className="text-gray-300 text-base">
                      Phone: {patient.user_phone}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <p className="text-gray-300 text-base">
                      Email: {patient.user_email}
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <p className="text-white italic text-sm">{patient.condition}</p>
              </div>

              <button
                className="mt-6 bg-blue-600 text-white py-2 px-4 rounded-full hover:bg-blue-500 text-lg font-semibold"
                onClick={closeModal}
              >
                Close
              </button>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
}
