import { useParams } from "react-router-dom";
import { useGetBlogId } from "../../../hooks/useGetBlogId";
import BlogSkeleton from "./BlogSkeleton";

export default function BlogInformation() {
  const { id } = useParams();
  const { data, isError, isLoading, error } = useGetBlogId(id);

  if (isLoading) {
    return <BlogSkeleton/>
  }

  if (isError || !data?.blog) {
    return <p className="text-center text-red-500">Error: {error?.message || "Blog not found."}</p>;
  }

  const dataBlog = data.blog;

  const description = dataBlog.description
    ? dataBlog.description.includes("/")
      ? dataBlog.description.split("/")
      : [dataBlog.description]
    : [];

  return (
    <div className="single-blog-content px-4 md:px-16 lg:px-32 mt-10">
      <h1 className="text-4xl font-bold mb-4 text-center break-all">
        {dataBlog.title}
      </h1>

      <p className="text-xs text-gray-500 mb-4">
        Reading Time: {dataBlog.reading_time} minutes
      </p>

      {description
        .slice(0, Math.floor(description.length / 2))
        .map((part, index) => (
          <p
            key={`content-top-${index}`}
            className="text-lg text-gray-700 mb-6 break-words"
          >
            {part.trim()}
          </p>
        ))}

      <img
        src={dataBlog.img}
       
        className="w-full h-[26.5rem] object-fill object-center rounded-md mb-6"
      />

      {description
        .slice(Math.floor(description.length / 2))
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
