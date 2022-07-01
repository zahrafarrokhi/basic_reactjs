### install react
```JSX
sudo npm i -g create-react-app
create-react-app hello-word
cd hello-word
npm run start

```

```JSX
import "./App.css";
import Products from "../Products/Products";

function App() {
  return (
    <div className="App">
     <Products /> 
    
    </div>
  );
}

export default App;

// Products
import PRODUCTS from "./PRODUCTS.json";
const Products = (props) => {
 
  return (
    <div>
      <ul>
        {PRODUCTS.map((item) => (
           <li>
           <h3>{item.name}</h3>
               <image
            src={item.image}
          style={{ width: "200px", height: "200px" }}
           />
             <span>Price:{item.price}</span>
            </li>
            
       
        ))}
      </ul>
    </div>
  );
};

export default Products;
```
