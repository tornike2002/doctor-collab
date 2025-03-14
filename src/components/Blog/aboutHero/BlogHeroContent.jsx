import threedot from "/imgs/7066144.png";
function BlogHeroContent({ HeroImg, HeroTitle, HeroSubTitle, id }) {
    return (
      <div
        className={`relative min-h-[390px] sm:min-h-[557px] lg:min-h-screen 
          flex items-center max-w-full bg-no-repeat bg-cover bg-center`}
        style={{ backgroundImage: `url("${HeroImg}")` }}
      >
        <div className="absolute top-4 right-4">
          <img
            src={threedot}
            alt="dots"
            className="w-10 h-10 cursor-pointer object-cover object-center"
          />
        </div>
        <div className="flex flex-col justify-end gap-3 px-[36px] h-full">
          <h1 className="text-black font-poppinsRegular text-[48px] leading-[40px]">
            {HeroTitle}
          </h1>
          <h3 className="text-black font-heeboRegular text-[24px] leading-[24px]">
            {HeroSubTitle}
          </h3>
        </div>
     
      </div>
    );
  }
  
  export default BlogHeroContent;
  