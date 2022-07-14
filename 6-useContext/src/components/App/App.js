import "./App.css";
import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Layout from "../Layout/Layout";
//theme
import ThemeContext from "../../contexts/ThemeContext";
import themeConfig from "../../configs/theme";

function App() {
  const [activeTheme, setActiveTheme] = useState("green");
  return (
    <ThemeContext.Provider
      value={{
        //  test:"hello",
        theme: themeConfig[activeTheme],
        setActiveTheme,
      }}
    >
      <Layout>
        <Outlet />
      </Layout>
    </ThemeContext.Provider>
  );
}

export default App;
