import Modal from "../../../Modal";

export default function ShowChange({
  handleUpdateDescription,
  selectedId,
  title,
  id,
  showOverlay,
  editError,
  handleCloseOverlay,
}) {
  return (
    <>
      {showOverlay && selectedId === id && (
        <Modal>
          <div>
            <form
              onSubmit={(e) => handleUpdateDescription(e, id)}
              className="bg-white w-[400px] p-8 rounded-lg"
            >
              <input
                type="text"
                name="title"
                placeholder="Enter new title"
                className="w-full p-2 border border-gray-300 rounded-lg"
                defaultValue={title}
              />
              {editError && <p className="text-red-500">{editError}</p>}

              <div className="flex mt-4 justify-between">
                <button
                  type="button"
                  className="px-4 py-2 bg-gray-400 text-white rounded-lg"
                  onClick={handleCloseOverlay}
                >
                  Close
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg"
                >
                  Edit
                </button>
              </div>
            </form>
          </div>
        </Modal>
      )}
    </>
  );
}
