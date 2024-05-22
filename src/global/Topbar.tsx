import { Box, IconButton, useTheme } from "@mui/material";
import { useContext, useState } from "react";
import { ColorModeContext, tokens } from "../theme";
import { InputBase } from "@mui/material";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";
import SearchBar from "../components/SearchBar";
import AlignItemsList from "../components/ListItems";

const Topbar = ({ symbol, setSymbol }) => {
  const [searchBar, setSearchBar] = useState<boolean>(false);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [results, setResults] = useState([]);

  const colorMode = useContext(ColorModeContext);

  return (
    <Box display={"flex"} justifyContent={"space-between"} p={2}>
      {/*Market, portfolio*/}
      <Box display={"flex"}></Box>
      <Box display={"flex"}>
        <IconButton>Markets</IconButton>
        <IconButton sx={{ ml: 3, flex: 1 }}>Holdings</IconButton>
        <IconButton
          onClick={() => {
            colorMode.toggleColorMode();
          }}
          sx={{ ml: 3, flex: 1 }}
        >
          {theme.palette.mode === "light" ? (
            <DarkModeOutlinedIcon />
          ) : (
            <LightModeOutlinedIcon />
          )}
        </IconButton>
      </Box>

      {/* Search bar and icon */}
      <Box
        display={"flex"}
        backgroundColor={colors.primary[400]}
        borderRadius={"3px"}
      >
        <Box>
          {/* <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" /> */}
          <SearchBar symbol={symbol} setSymbol={setSymbol} />
          {/* <IconButton type="button" sx={{ p: 1 }}>
            <SearchIcon />
          </IconButton> */}
          <Box sx={{ width: "100%" }} display={"flex"}>
            {/* {showResults ? <AlignItemsList /> : <></>} */}
          </Box>
        </Box>
        {/* <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
        <IconButton type="button" sx={{ p: 1 }}>
          <SearchIcon />
        </IconButton> */}
      </Box>
    </Box>
  );
};

export default Topbar;
