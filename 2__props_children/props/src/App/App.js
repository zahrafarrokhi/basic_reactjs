import "./App.css";
import PRODUCTS from "./PRODUCTS.json";
import Products from "../Products/Products";

function App() {
  return (
    <div className="App">
      {/* <Products /> */}
      <Products data={PRODUCTS} />
    </div>
  );
}

export default App;
