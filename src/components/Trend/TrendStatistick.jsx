import React from "react";

export default function TrendStatistick() {
  return (
    <div>
      {" "}
      <div className=" w-[370px] lg:w-[500px] flex flex-col p-7 flex-start gap-3 border border-[#101012] rounded-md">
        <div className="text-[#101012] font-poppinsBold  text-[24px] tracking-[-0.72px] md:text-[36px]">
          <h1 className="font-poppinsMedium">Appointments This Week</h1>
          <h3 className="font-bold">15</h3>
        </div>
        <div className="text-[#101012] font-poppinsBold  text-[24px] tracking-[-0.72px] md:text-[36px]">
          <h1 className="font-poppinsMedium">Appointments</h1>
          <h3 className="font-bold">567</h3>
        </div>
        <div className="text-[#101012] font-poppinsBold  text-[24px] tracking-[-0.72px] md:text-[36px]">
          <h1 className="font-poppinsMedium">Total Patients</h1>
          <h3 className="font-bold">1,234</h3>
        </div>
        <div className="text-[#101012] font-poppinsBold  text-[24px] tracking-[-0.72px] md:text-[36px]">
          <h1 className="font-poppinsMedium">Revenue</h1>
          <h3 className="font-bold">$678</h3>
        </div>
      </div>
    </div>
  );
}
