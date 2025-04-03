import React from "react";
import { useParams } from "react-router-dom";
import { useGetPatientsId } from "../../../hooks/useGetPatientsId";
import SingleBookingSkeleton from "./SingleBookingSkeleton";
import ErrorMessage from "../../ErrorMessage";

export default function BookingPage() {
  const { id } = useParams();
  const { data, isLoading, isError, error } = useGetPatientsId(id);

  if (isLoading) return <SingleBookingSkeleton />;

  if (isError) return <ErrorMessage errorMessage={error.message} />;

  return (
    <div>
      <div className="max-w-4xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Booking Details
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-50 p-4 rounded-lg shadow">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">
              User Information
            </h2>
            <p className="mb-2">
              <span className="font-medium text-gray-600">Name:</span>{" "}
              {data.user_name}
            </p>
            <p className="mb-2">
              <span className="font-medium text-gray-600">Email:</span>{" "}
              {data.user_email}
            </p>
            <p className="mb-2">
              <span className="font-medium text-gray-600">Phone:</span>{" "}
              {data.user_phone}
            </p>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg shadow">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">
              Booking Information
            </h2>
            <p className="mb-2">
              <span className="font-medium text-gray-600">Condition:</span>{" "}
              {data.condition}
            </p>
            <p className="mb-2">
              <span className="font-medium text-gray-600">Date:</span>{" "}
              {data.date}
            </p>
            <p className="mb-2">
              <span className="font-medium text-gray-600">Status:</span>{" "}
              <span
                className={`${
                  data.status === "Pending"
                    ? "text-yellow-500"
                    : data.status === "Completed"
                    ? "text-green-500"
                    : "text-red-500"
                } font-medium`}
              >
                {data.status}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
