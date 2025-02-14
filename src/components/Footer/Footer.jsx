import React from "react";
import Contact from "./Contact";
import FooterInfo from "./FooterInfo";

export default function Footer() {
  return (
    <div className="bg-[#EFF6FF] flex flex-col lg:flex-row items-center justify-between px-8 py-12 mt-20 gap-10 lg:gap-20">
      <Contact />
      <FooterInfo />
    </div>
  );
}
