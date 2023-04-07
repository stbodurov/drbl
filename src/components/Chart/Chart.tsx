import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
  ChartData,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options: ChartOptions<"bar"> = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
      labels: {
        font: {
          family: "Open Sans",
        },
      },
    },
  },
  scales: {
    x: {
      stacked: true,
      grid: {
        display: false,
        drawBorder: false,
      },
      ticks: {
        align: "end",
        maxRotation: 0,
        minRotation: 0,
        autoSkip: false,
      },
    },
    y: {
      display: false,
    },
  },
};

const data: ChartData<"bar"> = {
  labels: [
    "Jan",
    "",
    "",
    "Feb",
    "",
    "",
    "Mar",
    "",
    "",
    "Apr",
    "",
    "",
    "May",
    "",
    "",
    "Jun",
    "",
    "",
  ],
  datasets: [
    {
      data: [
        13, 24, 53, 15, 45, 21, 13, 24, 53, 15, 45, 21, 13, 24, 53, 15, 45, 21,
      ],
      backgroundColor: "#744dfe",
      borderRadius: 50,
      categoryPercentage: 1.0,
      barPercentage: 0.4,
    },
    {
      data: [
        -13, -24, -53, -15, -45, -21, -13, -24, -53, -15, -45, -21, -13, -24,
        -53, -15, -45, -21,
      ].map((n) => n / 3),
      backgroundColor: "#EFEBFF",
      borderRadius: 50,
      categoryPercentage: 1.0,
      barPercentage: 0.4,
    },
  ],
};

const Chart = () => {
  return (
    <div style={{ minHeight: "12rem" }}>
      <Bar options={options} data={data} />
    </div>
  );
};

export default Chart;
