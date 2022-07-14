# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

`Footer/footer.jsx,footer.css`
```jsx
import React, { useContext } from "react";
import './Footer.css'


const Footer = () => {
 
  return (
    <div className="Footer">
      <h5>Developed By zahra</h5>
      <div>
        <button  className="green">
          Green
        </button>       
        <button className="blue">
          Blue
        </button>
      </div>
    </div>
  );
};

export default Footer
```
`configs/theme.js`

```jsx
const theme = {
  green: {
    color: "rgba(0, 128, 49)",
  },
  blue: {
    color: "rgb(2, 19, 116)",
  },
};

export default theme;
```
`Contexts/ThemeContext.js`
```jsx
import React from 'react'

const ThemeContext = React.createContext();

export default ThemeContext;
```
#### ThemeContext.Provider
`App.js(import Provider)`
```jsx
import React, { useState } from 'react';
import ThemeContext from "../../contexts/ThemeContext";
import themeConfig from '../../configs/theme';


function App() {
  const [activeTheme, setActiveTheme] = useState('green');
  return (
    
    <ThemeContext.Provider
      value={{
        theme: themeConfig[activeTheme],
        setActiveTheme,
      }}
    >
     .
     .
     .
    </ThemeContext.Provider>
  );
}

```
`ProductItem`
```jsx
import React, { useContext } from "react";

import ThemeContext from "../../contexts/ThemeContext";

const ProductItem = ({ data }) => {
  const themeValues = useContext(ThemeContext);
  console.log(themeValues);

  return (
    <li className="ProductItem">
      <Link to={`/product/${data.id}`}>
        <h3>{data.name}</h3>
      </Link>
      <Image
        imgSrc={data.image}
        style={{ width: "200px", height: "200px" }}
        alt="productpic"
      />

      <span>Price: {data.price}</span>
      <Button
        
      >
        Add to cart
      </Button>
    </li>
  );
};

export default ProductItem;

```
`ProductItem`
```jsx
//btn style
 <Button
        style={{
          color: themeValues.theme.color,
          borderColor: themeValues.theme.color,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        Add to cart
      </Button>

```
`Button.jsx`
```jsx
//...props
import React from 'react';

import './Button.css';

const Button = ({
  children, handleClick = () => {}, ...props
}) => (
  <button onClick={handleClick} className="button" {...props}>
    {children}
  </button>
);



export default Button;

```

`footer.js`
```jsx
import React, { useContext } from "react";
import './Footer.css'
import ThemeContext from "../../contexts/ThemeContext";

const Footer = () => {
  const themeValues = useContext(ThemeContext);
  return (
    <div className="Footer">
      <h5>Developed By Ehsan</h5>
      <div>
        <button onClick={() => themeValues.setActiveTheme('green')} className="green">
          Green
        </button>
        <button onClick={() => themeValues.setActiveTheme('blue')} className="blue">
          Blue
        </button>
      </div>
    </div>
  );
};

export default Footer

```