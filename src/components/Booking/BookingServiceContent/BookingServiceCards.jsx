import { useGetPatients } from "../../../hooks/useGetPatients";
import ServiceSkeleton from "../../home/serviciesCard/ServiceSkeleton";
import ErrorMessage from "../../ErrorMessage";
import BookingService from "./BookingService";
function BookingServiceCards() {
  const { data, isLoading, isError, error } = useGetPatients();
  console.log(data);
  if (isLoading) return <ServiceSkeleton />;
  if (isError) return <ErrorMessage errorMessage={error.message} />;

  return (
    <div className="p-10 ms:p-[20px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-7">
      {data.map((service) => (
        <BookingService key={service.id} service={service} />
      ))}
    </div>
  );
}

export default BookingServiceCards;
