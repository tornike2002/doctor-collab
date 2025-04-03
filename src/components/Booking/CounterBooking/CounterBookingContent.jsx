
export default function CounterBookingContent({ appointment, total, month }) {
  return (
    <div className="bg-[#f1f8f8e5] w-[90%]   shadow-xl p-3 flex flex-col gap-4 rounded-[18px] my-40">
      <div className="flex items-center justify-between">
        <h1 className="font-robotoMedium text-[#101012] text-[17px]">
          {appointment}
        </h1>
        <h2 className="text-[#488DF1] text-[15px] leading-[135%]">{month}</h2>
      </div>
      <h1 className="text-[#101012] font-poppinsSemiBold text-[34px]">
        Total Bookings: {total}
      </h1>
    </div>
  );
}
