import threedot from "/imgs/7066144.png";

function ServiceCardItem({ service }) {
  console.log(service);
  return (
    <div className="flex flex-col items-center rounded-lg p-4 shadow-lg hover:shadow-xl hover:scale-110 transition-transform duration-500">
      <img
        src={service.image}
        alt="Service"
        className="w-full object-cover object-center h-[14rem] rounded-lg mb-2 cursor-pointer shadow-md"
      />
      <img
        src={threedot}
        alt="Dots"
        className="w-10 absolute right-2 cursor-pointer hover:scale-125 transition-transform duration-500 shadow-sm"
      />
      <p className="text-xl font-medium text-lightBlue cursor-pointer overflow-hidden text-ellipsis max-w-full shadow-sm">
        {service.title}
      </p>
    </div>
  );
}

export default ServiceCardItem;
