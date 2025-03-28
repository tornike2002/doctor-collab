import { useGetFooter } from "../../hooks/useGetFooter";
import FooterMap from "./FooterMap";

export default function FooterInfo() {
  const { data, isError, isLoading, error } = useGetFooter();

  if (isLoading) {
    return (
      <div className="text-center text-gray-500">
        <p>Loading...</p>
      </div>
    );
  }
  if (isError) {
    return <p className="text-center text-red-500">{error.message}</p>;
  }

  return (
    <>
      {data.map((title, index) => (
        <FooterMap key={index} title={title} />
      ))}
    </>
  );
}
