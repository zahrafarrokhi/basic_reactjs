import "./App.css";
import React from 'react';

import { Outlet } from "react-router-dom";

import Layout from "../Layout/Layout";

// import themeConfig from '../../configs/theme';

function App() {
  // const [activeTheme, setActiveTheme] = useState('green');
  return (
    
   
      <Layout>
        <Outlet />
      </Layout>
    
  );
}

export default App;
