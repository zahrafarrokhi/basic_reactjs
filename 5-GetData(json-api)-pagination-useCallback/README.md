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


#### data & component(get data from JSON)

```jsx
//components/Blog/blog.js
import React, { useState,useEffect } from "react";
import Button from "../Button/Button";
// import Image from "../Image/Image";
import POSTS from "./POSTS.json";
import "./Blog.css";

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
 
  const handleLoadPosts = () => {
    setLoading(false);
    setTimeout(() => {
      setPosts(POSTS);
      setLoaded(true)
      setLoading(true);
    }, 1000);
  };
  
 
  return (
    <div className="Blog">
      <Button handleClick={handleLoadPosts}>
        {loading ? "loading" : "Load POSTS "}
      </Button>
      {posts.length === 0 && <div>No Posts</div>}

      {posts.length > 0 && (
        <ul>
          {posts.map((post) => (
            <li>
              <h3>{post.title}</h3>
              <img src={post.image} style={{ width: "50", height: "50" }} />
              {/* <Image
                imgSrc={post.image}
                customStyle={{ width: "100", height: "100" }}
                alt={post.name}
              /> */}
              <p>{post.content}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Blog;


```

