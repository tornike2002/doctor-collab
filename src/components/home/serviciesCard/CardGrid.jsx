import ServiceCardItem from "./ServiceCardItem";

function CardGrid({ services, openModalId, setOpenModalId, handleDelete }) {
  return (
    <div className="grid grid-cols-1 gap-20 gap-y-10 p-4 sm:grid-cols-2 lg:grid-cols-3">
      {services.slice(0, 6).map((service) => (
        <ServiceCardItem
          key={service.id}
          service={service}
          openModalId={openModalId}
          setOpenModalId={setOpenModalId}
          handleDelete={handleDelete}
        />
      ))}
    </div>
  );
}

export default CardGrid;
