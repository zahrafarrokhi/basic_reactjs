import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PRODUCTS from "./components/App/PRODUCTS.json";
import "./index.css";
// import App from "./App/App";
import Products from "./components/Products/Products";
import Product from './components/Product/Product'
import About from "./components/About/About";
import Blog from "./components/Blog/Blog";
import Contact from "./components/Contact/Contact";
import App from "./components/App/App";
import Api from "./components/Api/Api";
//theme
import ThemeContext from "./contexts/ThemeContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeContext.Provider
  value={{
     test:"hello"
    // theme: themeConfig[activeTheme],
    // setActiveTheme,
  }}
>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Products data={PRODUCTS} />} />
        <Route path="about" element={<About />} />
        <Route path="blog" element={<Blog />} />
        <Route path="api" element={<Api />} />
        <Route path="product" >
          <Route path=":pid" element={<Product/>}/>
        </Route>
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
    </BrowserRouter>
    </ThemeContext.Provider>
);
