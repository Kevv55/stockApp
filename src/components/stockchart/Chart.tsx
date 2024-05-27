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
import { useEffect } from "react";
import { fetchDataTwelve } from "./calls/twelveFetch";
import { cleanDataTwelve } from "./functions/cleanDataTwelve";
import { Typography } from "@mui/material";
import noData from "./../../Media/noun-no-data-5342599.svg";

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

const options = {
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    y: {
      ticks: {
        min: 0,
        max: 20,
        stepSize: 3,
      },
    },
    x: {
      ticks: {
        autoSkip: true,
        maxTicksLimit: 4,
      },
      display: true,
      scaleLabel: {
        display: true,
        labelString: "Point",
      },
    },
  },
};

const defaultData = {
  // labels: [
  //   2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024,
  // ],
  datasets: [
    {
      label: "No. of downloads (K)",
      // data: [2, 6, 9, 7, 11, 15, 12, 13, 16, 18, 20, 21],
      borderColor: "#C8ECCC",
      backgroundColor: "#F0FAF1",
      pointBorderColor: "#AAA",
      pointBackgroundColor: "#FEF1F1",
    },
  ],
};

type Props = {
  stockData: any;
  setStockData: (value: any) => void;
  symbol: string;
  interval: string;
  setDataReady: (value: boolean) => void;
  dataReady: any;
};

const Chart = ({
  setStockData,
  stockData,
  symbol,
  interval,
  setDataReady,
  dataReady,
}: Props) => {
  useEffect(() => {
    fetchDataTwelve(symbol, interval).then((data) => {
      const a = cleanDataTwelve(data, symbol);
      console.log(a);
      setStockData(a);
      setDataReady(true);
    });
  }, [symbol, interval]);

  if (dataReady) {
    return <Line data={stockData} options={options} />;
  } else {
    return (
      <div style={{ position: "relative" }}>
        <div style={{ position: "absolute", zIndex: 20 }}>
          <p>Error displaying data. Please Refresh Page...</p>
        </div>
        <Typography>
          There was an error fetching the data, Please wait one minute and
          reload the page. Make sure you picked a valid security
        </Typography>
        {/* <Line data={defaultData} options={options} />; */}
        <img src={noData} />
      </div>
    );
  }
};

export default Chart;
