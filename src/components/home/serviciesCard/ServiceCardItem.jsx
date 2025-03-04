import threedot from "/imgs/7066144.png";
import Modal from "../../Modal/Modal";
import ServiceModal from "./ServiceModal";

function ServiceCardItem({
  service,
  openModalId,
  setOpenModalId,
  handleDelete,
}) {
  return (
    <div className="relative flex flex-col items-center rounded-lg p-4 shadow-lg hover:shadow-xl hover:scale-110 transition-transform duration-500">
      <div className="relative w-full group">
        <img
          src={service.image}
          alt="Service"
          className="w-full object-cover object-center h-[14rem] rounded-lg mb-2 cursor-pointer shadow-md"
        />
        <img
          onClick={() => setOpenModalId(service.id)}
          src={threedot}
          alt="Dots"
          className="absolute top-2 right-2 w-10 cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        />
      </div>
      {openModalId == service.id && (
        <Modal>
          <ServiceModal
            service={service}
            closeModal={() => setOpenModalId(null)}
            handleDelete={handleDelete}
          />
        </Modal>
      )}
      <p className="text-xl font-medium text-lightBlue cursor-pointer overflow-hidden text-ellipsis max-w-full shadow-sm">
        {service.title}
      </p>
    </div>
  );
}

export default ServiceCardItem;
