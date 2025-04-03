import React from "react";

export default function HeroContent({ data, fileRef, handleFormData }) {
  return (
    <div
      className="relative h-[500px] sm:min-h-[557px] 
        flex items-center justify-center text-center max-w-full 
        bg-no-repeat bg-cover bg-center"
      style={{ backgroundImage: `url(${data.img})` }}
    >
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10 flex flex-col gap-4 items-center">
        <h1
          className="font-poppinsBold text-4xl lg:text-7xl leading-tight capitalize
            text-transparent bg-gradient-to-b from-[#07D] to-[#004077] bg-clip-text"
        >
          This is the main heading
        </h1>

        <div className="flex flex-col items-center gap-3">
          <input type="file" ref={fileRef} className="hidden" />

          <button
            onClick={() => fileRef.current.click()}
            className="cursor-pointer flex items-center gap-2 bg-[#CBDEEF80] px-6 py-3 rounded-md
              text-[#21243D] text-lg font-semibold hover:bg-[#b0c4de]"
          >
            Upload New Picture
          </button>

          <button
            onClick={handleFormData}
            className="cursor-pointer flex items-center gap-2 bg-[#CBDEEF80] px-6 py-3 rounded-md
              text-[#21243D] text-lg font-semibold hover:bg-[#b0c4de]"
          >
            click
          </button>
        </div>
      </div>
    </div>
  );
}
