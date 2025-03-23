import { useGetAboutInfo } from "../../../hooks/useGetAboutInfo";
import ErrorMessage from "../../ErrorMessage";
import AboutMeImg from "./AboutMeImg";
import AboutMeSkeleton from "./AboutMeSkeleton";


export default function AboutMeInfo() {
  const { data, isLoading, isError,error } = useGetAboutInfo();
  console.log(data)
  if (isLoading) return <AboutMeSkeleton/>;
  if (isError) return<ErrorMessage errorMessage={error.message}/>
  return (
    <div className="">
        
      {data.map((dataHero) => (
        <div key={dataHero.id}>
          <h1 className="text-[42px] md:text-[52px] lg:text-[64px] font-poppinsBold  text-veryDark mt-[50px] text-center">
            {dataHero.title}
          </h1>
          <AboutMeImg text={dataHero.text} dataHeroImg={dataHero.img} id={dataHero.id} />
        </div>
      ))}
    </div>
  );
}
