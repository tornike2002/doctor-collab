import AboutMeInfo from "../components/aboutMe/aboutMeInfo/AboutMeInfo";
import AboutMeAwards from "../components/aboutMe/awards/AboutMeAwards";
import AboutMeEducation from "../components/aboutMe/education/AboutMeEducation";
import AboutMeExperience from "../components/aboutMe/Experience/AboutMeExperience";
import AboutMeSkil from "../components/aboutMe/skill/AboutMeSkil";

export default function AboutMe() {
  return (
    <div className="px-[30px]">
      <AboutMeInfo />
      <AboutMeExperience />
      <AboutMeEducation />
      <AboutMeSkil />
      <AboutMeAwards />
    </div>
  );
}
