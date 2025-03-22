import ServiceCardItem from "./ServiceCardItem";

function CardGrid({ service, openModalId, setOpenModalId, handleDelete }) {
  return (
    <ServiceCardItem
      id={service.id}
      service={service}
      openModalId={openModalId}
      setOpenModalId={setOpenModalId}
      handleDelete={handleDelete}
    />
  );
}

export default CardGrid;
