import { ScriptableContext } from "chart.js";

const amznValues = [
  187.42999, 183.27, 184.31, 181.47, 178.74001, 176.94, 178.08, 179.94,
  169.67999, 177.8, 182.75, 181.09, 181.64, 180.85001, 186.99001, 186.28,
  188.92, 187.44, 188.88, 189.16, 188, 183.82001, 185.97, 185.60001, 183.75999,
  184.34, 182.3, 183.88, 183.66, 181.64999,
];

export const gainLoss = () => {
  if (amznValues[amznValues.length - 1] - amznValues[0] > 0) {
    return true;
  } else {
    return false;
  }
};

const amznlabels = [
  "2024-04-15",
  "2024-04-16",
  "2024-04-17",
  "2024-04-18",
  "2024-04-19",
  "2024-04-22",
  "2024-04-23",
  "2024-04-24",
  "2024-04-25",
  "2024-04-26",
  "2024-04-29",
  "2024-04-30",
  "2024-05-01",
  "2024-05-02",
  "2024-05-03",
  "2024-05-06",
  "2024-05-07",
  "2024-05-08",
  "2024-05-09",
  "2024-05-10",
  "2024-05-13",
  "2024-05-14",
  "2024-05-15",
  "2024-05-16",
  "2024-05-17",
  "2024-05-20",
  "2024-05-21",
  "2024-05-22",
  "2024-05-23",
  "2024-05-24",
];

export const Data = {
  Amazon: {
    stockData: {
      labels: amznlabels,
      datasets: [
        {
          data: amznValues,
          pointBorderColor: "transparent",
          pointBackgroundColor: "transparent",
          // backgroundColor: "#ADD8E6",
          backgroundColor: (context: ScriptableContext<"line">) => {
            const ctx = context.chart.ctx;
            const gradient = ctx.createLinearGradient(0, 0, 0, 200);
            gradient.addColorStop(0, "rgba(216,248,216, 0.7)");
            gradient.addColorStop(1, "rgba(97,241,97, 0.1)");
            return gradient;
          },
          borderColor: "#04e404",
          //   fill: true,
        },
      ],
    },
  },
};

console.log(Data.Amazon.stockData);
