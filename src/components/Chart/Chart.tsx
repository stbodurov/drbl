import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
  ChartData
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

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
  plugins: {
    legend: {
      display: false
    }
  },
  scales: {

  }
};

const data: ChartData<"bar"> = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [
    {
      label: 'Dataset 1',
      data: [13, 24, 53, 15, 45, 21],
      backgroundColor: 'rgba(255, 99, 132, 0.5)'
    },
    {
      label: 'Dataset 2',
      data: [23, 24, 23, 22, 42, 22],
      backgroundColor: 'rgba(53, 162, 235, 0.5)'
    },
    {
      label: 'Dataset 3',
      data: [73, 24, 73, 77, 47, 27],
      backgroundColor: 'rgba(53, 162, 235, 0.5)'
    },
  ],
};

const Chart = () => {
  return (
    <Bar options={options} data={data} />
  )
};

export default Chart;