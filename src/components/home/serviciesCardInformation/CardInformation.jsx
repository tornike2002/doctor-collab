import { useParams } from "react-router-dom";

import { useGetServicesId } from "../../../hooks/useGetServiciesId";
import ErrorMessage from "../../ErrorMessage";
import BlogSkeleton from "../../Blog/BlogInformation/BlogSkeleton";
function CardInformation() {
  const { id } = useParams();
  const { data, isError, isLoading } = useGetServicesId(id);

  if (isLoading) return <BlogSkeleton />;

  const serviceData = data.service;
  if (isError) return <ErrorMessage />;

  const contentParts = serviceData.content
    ? serviceData.content.includes("/")
      ? serviceData.content.split("/")
      : [serviceData.content]
    : [];

  return (
    <div className="single-blog-content px-4 md:px-16 lg:px-32 mt-10">
      <h1 className="text-4xl font-bold mb-4 text-center break-all">
        {serviceData.title}
      </h1>

      {contentParts
        .slice(0, Math.floor(contentParts.length / 2))
        .map((part, index) => (
          <p
            key={`content-top-${index}`}
            className="text-lg text-gray-700 mb-6 break-words"
          >
            {part.trim()}
          </p>
        ))}

      {serviceData.image && (
        <img
          src={serviceData.image}
          alt={serviceData.title || "Service Image"}
          className="w-full h-[26.5rem] object-cover rounded-md mb-6"
        />
      )}

      {contentParts
        .slice(Math.floor(contentParts.length / 2))
        .map((part, index) => (
          <p
            key={`content-bottom-${index}`}
            className="text-lg text-gray-700 mb-6 break-words"
          >
            {part.trim()}
          </p>
        ))}
    </div>
  );
}

export default CardInformation;
