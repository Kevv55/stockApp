import React, { useEffect, useState } from "react";
import { Typography, Box } from "@mui/material";
import { getFundamentalsData } from "../functions/getFundamentals";
type Props = {};

const Fundamentals = ({ symbol }: Props) => {
  const [fundamentals, getFundamentals] = useState([]);

  useEffect(() => {
    getFundamentalsData(symbol).then((data) => {
      getFundamentals(data);
    });
  }, []);

  console.log(fundamentals);
  // const beta = "Beta: " + fundamentals.metric["10DayAverageTradingVolume"];
  return (
    <Box sx={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)" }}>
      {/* <Typography>{beta}</Typography> */}
      <Typography>Volume: </Typography>
      <Typography>52 wk high:</Typography>
      <Typography>52 wk low:</Typography>
      <Typography>Yield:</Typography>
    </Box>
  );
};

export default Fundamentals;
