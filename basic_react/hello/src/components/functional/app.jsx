import Navbar from "./navbar";
import Products from "./Products";
import React,{ useState,useEffect } from "react";
import ProductsContext from "./../../context/products";

const App = () => {
  const [products, setProducts] = useState([
    { id: 1, count: 2, productName: "f_context_laptop" },
    { id: 2, count: 1, productName: "f_context_phone" },
    { id: 3, count: 4, productName: "f_context_airpods" },
  ]);
  
  useEffect(() => {
    console.log('app')
  });
  return (
    <div>
   
      <ProductsContext.Provider
        value={{
          products: products,
          onDelete: handleDelete,
          onIncrement: handleIncrement,
          onDecrement: handleDecrement,
          onReset: handleReset,
        }}
      >
        <Navbar />
        <Products />
      </ProductsContext.Provider>
      </div>
  );

  function handleDelete(productId) {
    const newProducts = products.filter((p) => p.id !== productId);
    setProducts(newProducts);
  }

  function handleIncrement(productId) {
    const newProducts = [...products];
    const index = newProducts.findIndex((p) => p.id === productId);
    newProducts[index].count += 1;
    setProducts(newProducts);
  }

  function handleDecrement(productId) {
    const newProducts = [...products];
    const index = newProducts.findIndex((p) => p.id === productId);
    newProducts[index].count -= 1;
    setProducts(newProducts);
  }

  function handleReset() {
    const newProducts = products.map((p) => {
      p.count = 0;
      return p;
    });
    setProducts(newProducts);
  }
};

export default App;