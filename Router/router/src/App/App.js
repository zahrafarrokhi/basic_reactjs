import "./App.css";
// import PRODUCTS from "./PRODUCTS.json";
import Products from "../Products/Products";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


import About from '../About/About';
import Contact from '../Contact/Contact';
import Blog from '../Blog/Blog';
// import Layout from '../Layout/Layout'

function App() {
  return (
   
    <div className="App">
   <BrowserRouter>
    <Routes>
      <Route >
        <Route index element={   <Products />} />
        <Route path="about" element={  <About />}>
          <Route path="blog" element={ <Blog />} />
          <Route path="contact" element={<Contact/>} />
          {/* <Route index element={<LeagueStandings />} /> */}
        </Route>
      </Route>
    </Routes>
  </BrowserRouter>
  
  </div>
  );
}

export default App;
