### install react
```JSX
sudo npm i -g create-react-app
create-react-app hello-word
cd hello-word
npm run start

```

```JSX
//App.js
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
//json
//PRODUCTS.json
[
  {
    "id": "8495f61e-3ae1-4c16-bb63-beea3a9e753b",
    "name": "Stim",
    "image": "1.png",
    "price": 20
  },
  {
    "id": "a4168ba0-be35-4d39-8da1-9a6d0ee2e760",
    "name": "Fixflex",
    "image": "2.png",
    "price": 23
  },
  {
    "id": "748ec57f-ac70-4fb5-bfa9-2f6f623bea2a",
    "name": "Toughjoyfax",
    "image": "3.png",
    "price": 99
  },
  {
    "id": "b7eaf4fd-ece8-4ebe-8ab2-ae6358918bfd",
    "name": "Tempsoft",
    "image": "4.png",
    "price": 46
  }
]

// Products
import PRODUCTS from "./PRODUCTS.json";
const Products = () => {
 
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

#### props
```jsx
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
//
import ProductItem from "../ProductItem/ProductItem";

const Products = (props) => {
  // console.log('props', props)
  const { data } = props;
  return (
    <div>
      <ul>
        {data.map((item) => (
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
