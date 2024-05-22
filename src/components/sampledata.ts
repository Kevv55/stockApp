import { Line } from "react-chartjs-2";

export const sample = {
  labels: ["Apr 26", "Apr 27", "Apr 28", "Apr 29", "Apr 30", "Apr 31"],
  datasets: [
    {
      data: [5, 7, 3, 5, 8, 9],
      backgroundColor: "transparent",
      borderColor: "#000000",
      fill: true,
    },
    {
      data: [8, 5, 2, 5, 8, 9],
      backgroundColor: "transparent",
      borderColor: "#FF0000",
    },
  ],
};
