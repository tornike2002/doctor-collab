import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import ChartSkeleton from "./ChartSkeleton";
import { useGetPatients } from "../../../hooks/useGetPatients";
import ErrorMessage from "../../ErrorMessage";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function Chart(props) {
  const { data, isLoading, isError, error } = useGetPatients();

  if (isLoading) return <ChartSkeleton />;
  if (isError) return <ErrorMessage errorMsg={error.message} />;

  const monthCounts = data.reduce((acc, booking) => {
    const bookingMonth = new Date(booking.date).getMonth();
    acc[bookingMonth] += 1;
    return acc;
  }, Array(12).fill(0));

  const chartData = {
    labels: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    datasets: [
      {
        label: "Activity",
        data: monthCounts,
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
      },
      tooltip: {
        mode: "index",
        intersect: false,
      },
    },
    scales: {
      x: {
        ticks: {
          color: "black",
        },
      },
      y: {
        ticks: {
          color: "black",
        },
      },
    },
  };

  return (
    <div className="w-full p-[20px] max-w-[90%] md:max-w-[75%] lg:max-w-full mx-auto h-[300px] md:h-[400px] lg:h-[500px] my-40">
      <Line options={options} data={chartData} {...props} />
    </div>
  );
}
