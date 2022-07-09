import React,{ Component } from "react";
import Products from "./components/Products";
import Navbar from "./components/navbar";
import ProductContext from "./context/products";

class App extends Component {

  // constructor(props){
  //   super(props);
  //   console.log('App - constructor');
  // }

  // componentDidMount(){
  //   console.log('App - didMount');
  // }
  componentDidUpdate(){
    console.log('App - didUpdate');
  }
  state = {
    products: [
      { id: 1, count: 2, productName: "context_laptop" },
      { id: 2, count: 1, productName: "context_phone" },
      { id: 3, count: 4, productName: "context_airpods" },
    ],
  };

  render() {
    console.log('App - render');
    return (
      <div>
        {/* <Navbar products={this.state.products} />
        <Products
          products={this.state.products}
          onDelete={this.handleDelete}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          onReset={this.handleReset}
        /> */}

<ProductContext.Provider
          value={{
            products: this.state.products,
            onDelete: this.handleDelete,
            onIncrement: this.handleIncrement,
            onDecrement: this.handleDecrement,
            onReset: this.handleReset,
          }}
        >
          <Navbar />
          <Products />
        </ProductContext.Provider>
      </div>
    );
  }

  handleDelete = (productId) => {
    const newProducts = this.state.products.filter((p) => p.id !== productId);
    this.setState({ products: newProducts });
  };

  handleIncrement = (productId) => {
    const newProducts = [...this.state.products];
    const index = newProducts.findIndex((p) => p.id === productId);
    newProducts[index].count += 1;
    this.setState({ products: newProducts });
  };

  handleDecrement = (productId) => {
    const newProducts = [...this.state.products];
    const index = newProducts.findIndex((p) => p.id === productId);
    newProducts[index].count -= 1;
    this.setState({ products: newProducts });
  };

  handleReset = () => {
    const newProducts = this.state.products.map((p) => {
      p.count = 0;
      return p;
    });
    this.setState({ products: newProducts });
  };
}

export default App;