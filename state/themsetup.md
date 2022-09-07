### tailwind.config.js

```jsx
//  colors: {
//       primary: '#FF9D26',
//     },


/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      primary: '#FF9D26',
    },
    extend: {
      
    },
  },
  plugins: [],
}
```

### index.js
### mui
```jsx
const theme = createTheme({
  direction: 'rtl',
  palette: {
    primary: {
      main: '#FF9D26',
      contrastText: '#fff',
    }
  }
});
```