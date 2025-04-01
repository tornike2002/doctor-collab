function TotalBookingSkeleton() {
  return (
    <div className="bg-[#FAFFFF] shadow-custom-light p-3 flex flex-col gap-4 rounded-[18px] my-40 animate-pulse">
      <div className="flex items-center justify-between">
        <div className="bg-gray-300 h-4 w-32 rounded"></div>
        <div className="bg-gray-300 h-4 w-20 rounded"></div>
      </div>
      <div className="bg-gray-300 h-8 w-64 rounded mt-2"></div>
      <div className="grid grid-cols-2 gap-3">
        <div className="bg-gray-300 h-10 w-full rounded-[48px]"></div>
        <div className="bg-gray-300 h-10 w-full rounded-[48px]"></div>
      </div>
    </div>
  );
}

export default TotalBookingSkeleton;
