import React, { useState } from "react";
import { useGetFooter } from "../../hooks/useGetFooter";
import SettingsForm from "./SettingsForm";
import ErrorMessage from "../ErrorMessage";
import useUpDataFooter from "../../hooks/useUpDataFooter";
import { toast } from "react-toastify";
import SettingSkeletons from "./SettingSkeletons";

export default function SettingsMain() {
  const { data, isLoading, isError, error } = useGetFooter();
  const { mutate: apiUpdateFooter } = useUpDataFooter();

  if (isLoading) return <SettingSkeletons />;
  if (isError) return <ErrorMessage errorMessage={error.message} />;

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const text = formData.get("text");
    const phone = formData.get("phone");
    const email = formData.get("email");
    const address = formData.get("address");
    const linkedin = formData.get("linkedin");

    if (!text || text.length < 30 || text.length > 150) {
      return toast.error(
        "Footer text must be between 30 and 150 characters long!"
      );
    }

    if (!email || !/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      return toast.error("Please enter a valid email address!");
    }

    if (!phone || !/^\d+$/.test(phone)) {
      return toast.error("Please enter a valid phone number (digits only)!");
    }
    if (phone.length < 9 || phone.length > 16) {
      return toast.error("Phone number must be between 9 and 16 digits long!");
    }

    if (!address || address.length < 10) {
      return toast.error("Address must be at least 10 characters long!");
    }

    if (
      !linkedin ||
      !/^(https?:\/\/)?(www\.)?linkedin\.com\/.+/i.test(linkedin)
    ) {
      return toast.error(
        "Please enter a valid LinkedIn URL (e.g. https://linkedin.com/...)!"
      );
    }
    const currentData = data[0] || {
      text: "",
      phone: "",
      email: "",
      address: "",
      linkedin: "",
    };

    if (
      text === currentData.text &&
      phone === String(currentData.phone) &&
      email === currentData.email &&
      address === currentData.address &&
      linkedin === currentData.linkedin
    ) {
      return toast.error("No changes detected.");
    }
    apiUpdateFooter({
      id: currentData.id,
      text,
      phone,
      email,
      address,
      linkedin,
    });
  };

  return (
    <div>
      {data.map((item) => (
        <div key={item.id}>
          <SettingsForm settingData={item} handleSumbit={handleSubmit} />
        </div>
      ))}
    </div>
  );
}
