import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  ChartOptions,
  ChartData,
  ChartArea,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);

let gradient: CanvasGradient;
function getGradient(ctx: CanvasRenderingContext2D, chartArea: ChartArea) {
  if (!gradient) {
    // Create the gradient because this is either the first render
    // or the size of the chart has changed
    gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top);
    gradient.addColorStop(0, "rgb(134, 112, 247)");
    gradient.addColorStop(1, "rgb(236, 100, 153)");
  }

  return gradient;
}

const options: ChartOptions<"line"> = {
  responsive: true,
  maintainAspectRatio: false,
  layout: {
    padding: {
      top: -50,
      bottom: -50,
    },
  },
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

const data: ChartData<"line"> = {
  labels: ["", "", "", "", "", "", ""],
  datasets: [
    {
      data: [0, 35, 25, 75, 40, 70, 60],
      pointRadius: [0, 0, 0, 0, 0, 0, 5],
      fill: false,
      borderColor: function (context) {
        const chart = context.chart;
        const { ctx, chartArea } = chart;

        if (!chartArea) {
          // This case happens on initial chart load
          return;
        }
        return getGradient(ctx, chartArea);
      },
      tension: 0.5,
      pointBackgroundColor: "rgb(236, 100, 153)",
      pointBorderWidth: 0.1,
    },
  ],
};

const FavCurrencyChart = () => {
  return (
    <div
      style={{
        flexGrow: 1,
        height: "6rem",
        width: "100%",
        marginTop: "-20px",
        marginBottom: "-20px",
      }}
    >
      <Line options={options} data={data} height="100%" width="100%" />
    </div>
  );
};

export default FavCurrencyChart;
