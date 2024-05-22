import { Box, IconButton, Typography } from "@mui/material";
import InputBase from "@mui/material/InputBase";
import { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import AlignItemsList from "./ListItems";
import { importance } from "../staticData/countriesList";
import { sortCountries } from "../functions/sortData";

export const fetchData = async (value: string) => {
  // setLoading(true);
  console.log("Fetching for: ", value);
  const res = await fetch("https://api.twelvedata.com/stocks");
  const data = await res.json();
  const result = data.data.filter((user) => {
    // console.log(user);
    return (
      value &&
      user &&
      user.symbol &&
      user.symbol.toLowerCase().includes(value.toLowerCase())
    );
  });

  // setResults(sortCountries(importance, result));
  // setLoading(false);
  // setResults(result);
  // console.log("input was: ", value);
  console.log(result);
  // console.log(results);
  return result;
};

const SearchBar = ({ symbol, setSymbol }) => {
  const [input, setInput] = useState<string>("");
  const [showResults, setShowResults] = useState<boolean>(false);
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleChange = (value: any) => {
    setInput(value);
    if (input.length >= 1) {
      fetchData(input);
      setShowResults(true);
    }
  };
  if (input.length == 0) {
    // setShowResults(false);
  }

  console.log(results);

  useEffect(() => {
    if (input.length >= 3) {
      setLoading(true);
      fetchData(input).then((data) => {
        setResults(data);
        setLoading(false);
        console.log(data);
        // console.log(results);
      });
      setShowResults(true);
      // console.log(results);
    }
  }, [input]);

  return (
    <Box>
      <InputBase
        sx={{ ml: 2, flex: 1 }}
        placeholder="Search"
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
          // console.log(e.target.value);
        }}
      />
      <IconButton type="button" sx={{ p: 1 }}>
        <SearchIcon />
      </IconButton>
      <Box sx={{ zIndex: 40, position: "fixed" }}>
        {loading ? (
          <Box>
            <Typography>Loading...</Typography>
            <Typography>{input}</Typography>
          </Box>
        ) : (
          <></>
        )}
        {showResults ? (
          <AlignItemsList results={results} setSymbol={setSymbol} />
        ) : (
          <></>
        )}
      </Box>
    </Box>
  );
};

export default SearchBar;
