import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  ScriptableContext,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

type Props = { data: any };

const lineChart = ({ data }: Props) => {
  const options = {
    responsive: true,
    plugins: {
      Legend: { position: "bottom" },
    },
  };
  // console.log(data);

  return (
    <Line
      xAxis={[{ data: [1, 2, 3, 5, 8, 15] }]}
      series={[
        {
          data: [2, 5.5, 2, 8.5, 1.5],
        },
      ]}
      width={500}
      height={300}
    />
  );
};

export default lineChart;
