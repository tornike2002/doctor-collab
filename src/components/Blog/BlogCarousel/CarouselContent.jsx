import { useNavigate } from "react-router-dom";

function CarouselContent({ img, reading, title, content, id }) {
  const navigate = useNavigate();

  const navigateHandler = () => {
    navigate(`/blog/${id}`);
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 100);
  };

  return (
    <div
      className="border rounded-md border-[#0000001F] p-3 h-[550px] cursor-pointer mb-8"
      onClick={navigateHandler}
      role="button"
      tabIndex={0}
      aria-label={`Read more about ${title}`}
    >
      <img
        src={img}
        alt={`Thumbnail for ${title}`}
        className="h-[337px] object-cover object-center bg-no-repeat w-full max-w-[427px]"
      />

      <h3 className="font-heeboBold text-[15px] leading-[135%] text-[#00000080] pt-4">
        Reading time: {reading} minutes
      </h3>
      <h1 className="font-heeboBold text-xl mt-2">{title}</h1>
      <p className="font-heebo text-base mt-2 line-clamp-3">{content}</p>
    </div>
  );
}

export default CarouselContent;
