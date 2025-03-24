import AboutMeInfo from "../components/aboutMe/aboutMeInfo/AboutMeInfo";
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
    </div>
  );
}
