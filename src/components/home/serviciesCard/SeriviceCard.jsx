import React, { useState } from "react";
import { useGetServices } from "../../../hooks/useGetSerivices";
import CardGrid from "./CardGrid";
import ShowInputForm from "./ShowInputForm";

export default function SeriviceCard() {
  const { data, isLoading, isError, error } = useGetServices();
  const [showInput, setShowInput] = useState(false);

  const handleEditClick = () => {
    setShowInput(!showInput);
  };

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <div className="p-[10px]">
      <div className="flex flex-col gap-[20px] items-center w-full">
        <h1 className="text-[45px] font-extrabold">Services For My Patients</h1>
        <div
          className="w-full cursor-pointer flex text-[30px] font-extrabold justify-end pr-[30px]"
          onClick={handleEditClick}
        >
          <h1>Edit</h1>
        </div>
      </div>
      <ShowInputForm showInput={showInput} />{" "}
      <CardGrid services={data.services} isLoading={isLoading} />
    </div>
  );
}
