import React, { useEffect, useState } from "react";
import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import Header from "../../components/Header";
import { fetchDataTwelve } from "../../components/stockchart/calls/twelveFetch";
import { cleanDataTwelve } from "../../components/stockchart/functions/cleanDataTwelve";
import Chart from "../../components/stockchart/Chart";
import CustomizedMenus from "./DropdownInterval";
import Fundamentals from "../../components/Fundamentals";
import ImgMediaCard from "../../components/NewsCard";
import { newsStructure } from "../../shared/types";

export const profile = async (symbol: string) => {
  const KEY = "3webKAWsjx3ZcjQFuTEKw7KnphafhzG8";
  const symbo = "IBM";
  const res = await fetch(
    `https://financialmodelingprep.com/api/v3/profile/${symbol}?apikey=${KEY}`
  );
  if (res.status == 429) {
    console.log("Too many requests please wait...");
    return "error";
  }
  const data = await res.json();
  console.log(data);
  return data;
};

export const fetchNews = async () => {
  const KEY = "3webKAWsjx3ZcjQFuTEKw7KnphafhzG8";
  const pages = "0";
  const res = await fetch(
    `https://finnhub.io/api/v1/news?category=general&token=com0sfpr01qqra7gbgn0com0sfpr01qqra7gbgng`
  );
  const data = await res.json();
  return data;
};

const Dashboard = ({ symbol, setSymbol }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [companyName, setCompanyName] = useState("");
  const [dataReady, setDataReady] = useState<boolean>(false);
  const [stockData, setStockData] = useState({});
  const [exchange, setExchange] = useState("");
  const [price, setPrice] = useState(0);
  const [info, setInfo] = useState([]);
  const [currency, setCurrency] = useState<string>("");
  const [news, setNews] = useState<newsStructure[]>([]);
  const [description, setDescription] = useState("");

  const [interval, setInterval] = useState("30min");
  const randomNumber = Math.floor(Math.random() * 11);
  // console.log(symbol);

  useEffect(() => {
    fetchNews().then((data) => setNews(data));
  }, []);

  useEffect(() => {
    fetchDataTwelve(symbol, interval).then((data) => {
      const a = cleanDataTwelve(data, symbol);
      setStockData(a);
      profile(symbol).then((data) => {
        if (data != "error") {
          setCompanyName(data[0].companyName);
          setExchange(data[0].exchangeShortName);
          setPrice(data[0].price);
          setInfo(data);
          setCurrency(data[0].currency);
          setDescription(data[0].description);
          // console.log(data[0].companyName);
        } else {
          setCompanyName("Error, please wait...");
          setExchange("Error, please wait...");
          setPrice(429);
          // setInfo(data);
          setCurrency("Error, please wait...");
          setDescription("Error, please wait...");
        }
      });
      setDataReady(true);
    });
  }, [symbol, interval]);
  console.log(info);
  return (
    <Box m="20px">
      {/**Header section */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="DASHBOARD" subtitle="Welcome to my application" />

        {/* <Box>
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
            Download
          </Button>
        </Box> */}
      </Box>

      <Box
        display="grid"
        gridTemplateColumns="auto auto"
        // gridAutoRows="140px"
        gap="20px"
        sx={{ width: "100%" }}
        // backgroundColor={colors.primary[400]}
      >
        {/* ROW 1 */}
        <Box height="300px" m="-20px 0 0 0">
          <Typography variant="h2">{companyName}</Typography>
          <Typography variant="h3">{exchange + ": " + symbol}</Typography>
          {dataReady ? (
            <Typography
              variant="h1"
              sx={{ marginLeft: "10px", marginTop: "10px" }}
            >
              {price.toString() + " " + currency}
            </Typography>
          ) : (
            <></>
          )}

          <CustomizedMenus setInterval={setInterval} />
          <Chart
            setStockData={setStockData}
            stockData={stockData}
            symbol={symbol}
            interval={interval}
            setDataReady={setDataReady}
            dataReady={dataReady}
          />
          <Box
            gridColumn="span 2"
            gridRow="span 1"
            // backgroundColor={colors.primary[400]}
            // overflow="auto"
            sx={{ marginTop: "20px" }}
            // width="700px"
            backgroundColor={colors.primary[400]}
          >
            <Fundamentals symbol={symbol} description={description} />
          </Box>
        </Box>

        <Box
          // gridColumn="span 2"
          // display="flex"
          alignItems="center"
          justifyContent="center"
        >
          {news.slice(randomNumber, randomNumber + 5).map((n) => (
            <ImgMediaCard
              img={n.image}
              category={n.category}
              headline={n.summary}
              link={n.url}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
