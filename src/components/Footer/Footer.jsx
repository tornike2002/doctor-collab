import React from "react";
import Contact from "./Contact";
import FooterInfo from "./FooterInfo";

export default function Footer() {
  return (
    <div className="bg-[#EFF6FF] flex items-center  justify-between  px-[2rem] mt-[8rem]">
      <Contact />
      <FooterInfo />
    </div>
  );
}
