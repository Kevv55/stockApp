import { useState } from "react";
import Topbar from "./global/Topbar";
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Dashboard from "./scenes/dashboard";
import { Route, Routes } from "react-router-dom";
import Sidebar from "./global/Sidebar";

function App() {
  const [theme, colorMode] = useMode();
  const [symbol, setSymbol] = useState<string>("SPX");

  return (
    <>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <div className="app sidebar">
            <Sidebar />
            <main className="content">
              <Topbar setSymbol={setSymbol} />
              <Routes>
                <Route path="/" element={<Dashboard symbol={symbol} />} />
              </Routes>
            </main>
          </div>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </>
  );
}

export default App;
