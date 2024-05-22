import React, { useEffect, useState } from "react";
import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import Header from "../../components/Header";
import { LineChart } from "@mui/x-charts/LineChart";
import Simpleline from "../../components/sampledata";
import { Line } from "react-chartjs-2";
import { fetchDataTwelve } from "../../components/stockchart/calls/twelveFetch";
import { cleanDataTwelve } from "../../components/stockchart/functions/cleanDataTwelve";
import Chart from "../../components/stockchart/Chart";
import CustomizedMenus from "./DropdownInterval";
import Fundamentals from "../../components/Fundamentals";

const Dashboard = ({ symbol, setSymbol }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [dataReady, setDataReady] = useState<boolean>(false);
  const [stockData, setStockData] = useState({});

  const [interval, setInterval] = useState("30min");

  useEffect(() => {
    fetchDataTwelve(symbol, interval).then((data) => {
      const a = cleanDataTwelve(data, symbol);
      setStockData(a);
      setDataReady(true);
    });
  }, [symbol, interval]);
  return (
    <Box m="20px">
      {/**Header section */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="DASHBOARD" subtitle="Welcome to my application" />

        <Box>
          <Button
            sx={{
              backgroundColor: colors.blueAccent[700],
              color: colors.grey[100],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
          >
            <DownloadOutlinedIcon sx={{ mr: "10px" }} />
            Download Trade sheet
          </Button>
        </Box>
      </Box>

      <Box
      // gridColumn="span 8"
      // gridRow="span 2"
      // backgroundColor={colors.primary[400]}
      >
        {/* ROW 1 */}
        <Box height="300px" m="-20px 0 0 0">
          <Typography variant="h3">{symbol}</Typography>
          <CustomizedMenus setInterval={setInterval} />
          <Chart
            setStockData={setStockData}
            stockData={stockData}
            symbol={symbol}
            interval={interval}
            setDataReady={setDataReady}
            dataReady={dataReady}
          />
        </Box>

        <Box
          gridColumn="span 2"
          gridRow="span 1"
          // backgroundColor={colors.primary[400]}
          // overflow="auto"
          sx={{ paddingTop: 10 }}
          width="700px"
        >
          <Fundamentals symbol={symbol} />
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
