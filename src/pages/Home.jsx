import React from "react";
import Banner from "../components/home/banner/Banner";
import DoctorBio from "../components/home/doctorInfo/DoctorBio";
import SeriviceCard from "../components/home/serviciesCard/SeriviceCard";
import BlogCarousel from "../components/Blog/BlogCarousel/BlogCarousel"
export default function Home() {
  return (
    <div>
   
      
      <SeriviceCard />
      <Banner/>
      <BlogCarousel/>
      <DoctorBio />
    </div>
  );
}
