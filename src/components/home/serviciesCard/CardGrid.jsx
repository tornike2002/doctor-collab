import ServiceCardItem from "./ServiceCardItem";

function CardGrid({ service, openModalId, setOpenModalId, handleDelete }) {
  return (
    <ServiceCardItem
      key={service.id}
      service={service}
      openModalId={openModalId}
      setOpenModalId={setOpenModalId}
      handleDelete={handleDelete}
    />
  );
}

export default CardGrid;
