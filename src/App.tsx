import { useEffect, useState } from "react";
import Topbar from "./global/Topbar";
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Dashboard from "./scenes/dashboard";
import { Route, Routes } from "react-router-dom";
import Sidebar from "./global/Sidebar";

function App() {
  const [theme, colorMode] = useMode();
  const [symbol, setSymbol] = useState<string>("IBM");

  return (
    <>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <div className="app sidebar">
            <Sidebar />
            <main className="content">
              <Topbar symbol={symbol} setSymbol={setSymbol} />
              <Routes>
                <Route
                  path="/"
                  element={<Dashboard symbol={symbol} setSymbol={setSymbol} />}
                />
              </Routes>
            </main>
          </div>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </>
  );
}

export default App;
