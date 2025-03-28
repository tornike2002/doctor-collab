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
    const text = formData.get("text").trim();
    const phone = formData.get("phone").trim();
    const email = formData.get("email").trim();
    const address = formData.get("address").trim();
    const linkedin = formData.get("linkedin").trim();

    if (!text || text.length < 30 || text.length > 150) {
      return toast.error(
        "Footer text must be between 30 and 200 characters long!"
      );
    }

    if (!email || !/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      return toast.error("Please enter a valid email address!");
    }

    if (!phone || !/^\d+$/.test(phone)) {
      return toast.error("Please enter a valid phone number!");
    }
    if (phone.length < 9 || phone.length > 16) {
      return toast.error("Phone number must be between 9 and 16 digits long!");
    }
    if (!linkedin) {
      return toast.error("Please enter a valid LinkedIn URL!");
    }

    const currentData = data[0] || {};

    const hasChanges =
      text !== currentData.text ||
      phone !== currentData.phone ||
      email !== currentData.email ||
      address !== currentData.address ||
      linkedin !== currentData.linkedin;

    if (!hasChanges) {
      toast.error("No changes detected");
      return;
    }
    apiUpdateFooter(
      {
        id: currentData.id,
        text,
        phone,
        email,
        address,
        linkedin,
      },
      {
        onSuccess: () => toast.success("Footer updated successfully!"),
        onError: () => toast.error("Failed to update footer"),
      }
    );
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
