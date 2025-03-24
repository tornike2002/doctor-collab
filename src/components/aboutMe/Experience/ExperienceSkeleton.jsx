function ExperienceSkeleton({ count = 3 }) {
  return (
    <div className="flex mt-[200px] flex-col items-center bg-[#FFF] shadow-[custom-light] py-[40px]">
      <div className="flex justify-start w-full">
        <h1 className="font-poppinsBold text-[40px] leading-[130%] tracking-[-0.4px] text-gray-300">
          Experience
        </h1>
      </div>

      <div className="flex flex-col w-full gap-3 mt-3">
        {Array.from({ length: count }).map((_, index) => (
          <div
            key={index}
            className="flex justify-between items-center p-[16px] border rounded-lg animate-pulse md:gap-[50px]"
          >
            <div className="flex items-start w-full gap-4">
              <div className="bg-gray-300 w-5 h-5 flex justify-center items-center rounded-lg">
                <div className="w-3 h-3 bg-gray-200 rounded-full"></div>
              </div>

              <div className="flex flex-col w-full">
                <div className="bg-gray-300 h-6 w-32 rounded"></div>

                <div className="flex gap-4 mt-2">
                  <div className="bg-gray-300 w-24 h-5 rounded-md"></div>
                  <div className="bg-gray-300 w-20 h-5 rounded-md"></div>
                </div>

                <div className="bg-gray-300 w-40 h-5 mt-1 rounded-md"></div>
              </div>
            </div>

            <div className="flex gap-3 items-center">
              <div className="bg-gray-300 h-[30px] w-[30px] rounded-full"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ExperienceSkeleton;
