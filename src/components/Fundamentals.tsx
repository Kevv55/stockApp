import React, { useEffect, useState } from "react";
import { Typography, Box } from "@mui/material";
import { getFundamentalsData } from "../functions/getFundamentals";
type Props = {};

function formatNumber(n) {
  const num = n * 1000000;
  if (num >= 1e12) {
    return (num / 1e12).toFixed(2).replace(/\.00$/, "") + "T";
  } else if (num >= 1e9) {
    return (num / 1e9).toFixed(2).replace(/\.00$/, "") + "B";
  } else if (num >= 1e6) {
    return (num / 1e6).toFixed(2).replace(/\.00$/, "") + "M";
  } else if (num >= 1e3) {
    return (num / 1e3).toFixed(2).replace(/\.00$/, "") + "K";
  } else {
    return num.toString();
  }
}

const Fundamentals = ({ symbol, description }: Props) => {
  const [fundamentals, getFundamentals] = useState([]);
  const [established, setEstablished] = useState(false);

  useEffect(() => {
    getFundamentalsData(symbol).then((data) => {
      getFundamentals(data);
      setEstablished(true);
    });
  }, [symbol]);

  // console.log(fundamentals);
  // const beta = "Beta: " + fundamentals.metric["10DayAverageTradingVolume"];
  return (
    <Box>
      <Typography variant="h4" sx={{ marginBottom: "2%" }}>
        Summary
      </Typography>
      <Box sx={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)" }}>
        {/* <Typography>{beta}</Typography> */}
        {established ? (
          <>
            <Typography variant="h5">
              {"Volume: " + fundamentals.metric["10DayAverageTradingVolume"]}
            </Typography>
            <Typography variant="h5">
              {"52 wk high: $" + fundamentals.metric["52WeekHigh"]}
            </Typography>
            <Typography variant="h5">
              {"52 wk low: $" + fundamentals.metric["52WeekLow"]}
            </Typography>
            <Typography variant="h5">
              {"Beta: " + fundamentals.metric.beta}
            </Typography>
            <Typography variant="h5">
              {"Earnings Per share: $" + fundamentals.metric.epsAnnual}
            </Typography>
            <Typography variant="h5">
              {"Market Cap: " +
                formatNumber(fundamentals.metric.marketCapitalization)}
            </Typography>
          </>
        ) : (
          <>
            {" "}
            <Typography>Loading data please wait...</Typography>
          </>
        )}
      </Box>

      <Typography variant="h4" sx={{ marginBottom: "2%", marginTop: "2%" }}>
        Description
      </Typography>
      <Typography>{description}</Typography>
    </Box>
  );
};

export default Fundamentals;
