import {
  Chart as ChartJS,
  ArcElement,
  CategoryScale,
  LinearScale,
  LineElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  ChartOptions,
  ChartData,
} from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  ArcElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
);

const options: ChartOptions<"doughnut"> = {
  responsive: true,
  cutout: 21,
  plugins: {
    legend: {
      display: false,
    },
  },
};

const data: ChartData<"doughnut"> = {
  labels: ["Red", "Blue", "Yellow"],
  datasets: [
    {
      label: "My First Dataset",
      data: [300, 50, 100],
      backgroundColor: [
        "rgb(255, 99, 132)",
        "rgb(54, 162, 235)",
        "rgb(255, 205, 86)",
      ],
      hoverOffset: 4,
      borderWidth: 0.1,
      weight: 0.1,
    },
  ],
};

const PortfolioChart = () => {
  return (
    <div
      style={{
        width: "3rem",
      }}
    >
      <Doughnut options={options} data={data} />
    </div>
  );
};

export default PortfolioChart;
