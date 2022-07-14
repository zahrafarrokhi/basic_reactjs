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

#### add image to projects
* 1.
```jsx
//src/configs/general.js 
const PROJECT_URL = 'http://localhost:3000'

export {
    PROJECT_URL
}
//create puplic/assets/img
//src/components/ProductItem/ProductItem.js
import { PROJECT_URL } from '../../configs/general'
<Image imgSrc={`${PROJECT_URL}/assets/img/${data.image}`} />
```

* 2.
```jsx
//src/components/About/About.jsx
import React from 'react';
import profileImage from './profile.jpg';

const About = () => (
  <div className="about">
    About me
    <img
      alt="About Me"
      style={{
        width: '100%',
      }}
      src={profileImage}
    />
  </div>
);

export default About;
```
#### Eslint
```jsx
npm i -g eslint
eslint ---init
how would you like to use Eslint? to check syntax,find proplems,any code style
what type of module...? javascript modules
which framework does your project use? React
where does your code run? Browser
how would you like to define a style for your project? Airbnb
what format do you want to your config? json
would you like to install theme now with npm ? yes

// instal on devdependies
eslintrc.json
rightclick/format document with eslint
//or auto with ctrl+save
Eslint install on extension vscode
src/.vscode/setting.json
{
  "editor.CodeActionsOnSave":{
    "source.fixAll":true,
     "source.fixAll.eslint":true,

  }
}
```

#### git


### sass

```jsx
npm i node-sass
```

#### adding bootstrap react

```jsx

npm install --save bootstrap
// add on App.js
```

### mui
