import { Box, IconButton, Typography } from "@mui/material";
import InputBase from "@mui/material/InputBase";
import { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import AlignItemsList from "./ListItems";
import ClearIcon from "@mui/icons-material/Clear";

export const fetchData = async (value: string) => {
  console.log("Fetching for: ", value);
  const res = await fetch("https://api.twelvedata.com/stocks");
  const data = await res.json();
  const result = data.data.filter((user: any) => {
    return (
      value &&
      user &&
      user.symbol &&
      user.symbol.toLowerCase().includes(value.toLowerCase())
    );
  });

  return result;
};

type Props = {
  setSymbol: (value: any) => void;
};

const SearchBar = ({ setSymbol }: Props) => {
  const [input, setInput] = useState<string>("");
  const [showResults, setShowResults] = useState<boolean>(false);
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

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
        placeholder="Type the company's Ticker..."
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
          // console.log(e.target.value);
        }}
      />
      <IconButton
        type="button"
        sx={{ p: 1 }}
        onClick={() => {
          setShowResults(false);
          setInput("");
        }}
      >
        {showResults ? <ClearIcon /> : <SearchIcon />}
      </IconButton>
      <Box sx={{ zIndex: 40, position: "fixed" }}>
        {loading ? (
          <Box>
            <Typography>Loading...</Typography>
            {/* <Typography>{input}</Typography> */}
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
