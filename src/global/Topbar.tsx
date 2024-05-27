import { Box, IconButton, useTheme } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../theme";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import SearchBar from "../components/SearchBar";

type Props = {
  setSymbol: (value: any) => void;
};

const Topbar = ({ setSymbol }: Props) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
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
        <SearchBar setSymbol={setSymbol} />
      </Box>
    </Box>
  );
};

export default Topbar;
