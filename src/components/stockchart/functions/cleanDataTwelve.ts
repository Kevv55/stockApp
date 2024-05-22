import { ScriptableContext } from "chart.js";
import { sample } from "../../sampledata";

export const cleanDataTwelve = (data: any, symbol: any) => {
  try {
    if (data == "default") {
      console.log("API error displaying sample data");
      return sample;
    } else {
      const timeSeries = data.values;

      const timeStamps = [];
      const values = [];

      for (var time = 0; time < timeSeries.length; time++) {
        timeStamps.unshift(timeSeries[time].datetime);
        values.unshift(parseFloat(timeSeries[time].open));
      }

      const formattedData = {
        labels: timeStamps,
        datasets: [
          {
            label: symbol,
            data: values,
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
            fill: true,
          },
        ],
      };
      return formattedData;
    }
  } catch (err) {
    console.log("Error cleaning data, try again! Error code: ", err);
    return sample;
  }
};
