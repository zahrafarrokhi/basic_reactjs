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