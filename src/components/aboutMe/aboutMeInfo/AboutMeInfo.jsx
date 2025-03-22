import { useGetAboutInfo } from "../../../hooks/useGetAboutInfo";
import AboutMeImg from "./AboutMeImg";


export default function AboutMeInfo() {
  const { data, isLoading, isError } = useGetAboutInfo();
  console.log(data)
  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error loading data.</p>;
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
