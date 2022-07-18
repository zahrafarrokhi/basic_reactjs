### Todo

#### install

```jsx
npx create-react-app todo
cd todo
npm start
```

### rest css

[rest css](https://meyerweb.com/eric/tools/css/reset/)

```jsx
// index.css;
*{
box-sizing: border-box;
}
```

### Google Fonts: Browse Fonts

(google fonts)[https://fonts.google.com]

```jsx
// index.html
<!-- fonts recursive -->
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Recursive:wght@300;500;700&display=swap"
      rel="stylesheet"
    />
// index.css
body {

  font-family: 'Recursive', sans-serif;
}
```

#### CSS antialiasing cheatsheet
[font smoothing](https://devhints.io/css-antialias)
```jsx
//index.css
*{

-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
}
```
#### background-color
```jsx
body {
	
  background-color: #35bfbf;
}
```