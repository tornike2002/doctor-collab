import React from "react";
import Banner from "../components/home/banner/Banner";
import DoctorBio from "../components/home/doctorInfo/DoctorBio";
import SeriviceCard from "../components/home/serviciesCard/SeriviceCard";
export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <DoctorBio />
      <SeriviceCard />
    </div>
  );
}
