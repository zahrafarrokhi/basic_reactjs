## install react
```jsx
sudo npm i -g create-react-app
create-react-app hello-word
cd hello-word
npm run start

```
### router

```jsx

npm i react-router-dom
import { BrowserRouter, Routes, Route } from "react-router-dom";
```
### Point(Switch => Routes)
```jsx
In react-router-dom v6, "Switch" is replaced by routes "Routes". You need to update the import

import { Switch, Route } from "react-router-dom";
to

import { Routes ,Route } from 'react-router-dom';

```

Then you can config router in index.js:

```jsx 
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Products data={ProductsJSON} />} />
        <Route path="about" element={<About />} />
        <Route path="blog" element={<Blog />} />
        <Route path="product" >
          <Route path=":pid" element={<Product/>}/>
        </Route>
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
```

If you want to use nested routes like above you need to use `<Outlet/>` to access the current page.

```jsx

function App() {
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
}

```

You can use useParams to access url paramteres.



