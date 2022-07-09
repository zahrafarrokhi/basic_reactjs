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

#### useEffect

```jsx
//add above code
1.import React, { useState,useEffect } from "react";
2.const [loaded, setLoaded] = useState(false);
3.  const handleLoadPosts = () => {
    setLoading(false);
    setLoaded(true)
    setTimeout(() => {
      setPosts(POSTS);      
      setLoading(true);
    }, 1000);
  };
4. 
 //didMount
  useEffect(() => {
    console.log('useEffect');
    handleLoadPosts();
  }, [])
  //didUpdate
  useEffect(() => {
    console.log('loaded changed');
    
  },[loaded])

  
```

#### get data from api


```jsx
//componets/Api/Api.jsx

 const loadPosts = async () => {
    setLoading(true);
    const res = await fetch('https://fakestoreapi.com/products/')
    const posts = await res.json()
    setPosts(posts)
    setLoading(false);
  };
  
  useEffect(() => {    
    loadPosts();
  }, [])

  //loading
   {loading && <div>loading</div>}
```
###### useCallback
###### pagination
```jsx
//Blog.js
//slice
 {posts.slice(0,3).map((post) => (
          
  ))}
//1
  <div>
        <ul>
          <li>
            <Button>1</Button>
          </li>
        </ul>
 </div>
//2
 const calculatePageCounts = () => {
    if (posts.length % 3 > 0) {
      return parseInt(posts.length / 3 + 1);
    }
    return parseInt(posts.length / 3);
  }
//3
 useEffect(() => {
    calculatePageCounts();
  },[posts])
//4
const [pageCounts,setPageCounts] = useState(0)
//5
 useEffect(() => {
    
    setPageCounts(calculatePageCounts());
  },[posts])
//6
console.log('pageCounts',pageCounts)

//7
  <ul className="Pagination">
    {new Array(pageCounts).fill(0).map((item, index) => (
      <li className="pg">
        <Button>{index + 1}</Button>
      </li>
    ))}
</ul>

//8
const [activePageNumber,setActivePageNumber] = useState(1)

//9 {activePageNumber === index + 1 ? "active" : ""}
<ul className="Pagination">
          {new Array(pageCounts).fill(0).map((item, index) => (
            <li className={activePageNumber === index + 1 ? "active" : ""}>
              <Button >
                {index + 1}
              </Button>
            </li>
          ))}
        </ul>

//10 handleClick
 {new Array(pageCounts).fill(0).map((item, index) => (
            <li className={activePageNumber === index + 1 ? "active" : ""}>
              <Button handleClick={() => handleClickOnPages(index+1)}>
                {index + 1}
              </Button>
            </li>
 ))}
 //11
   const handleClickOnPages = (pageNumber) => {
    setActivePageNumber(pageNumber);
  }
//12 
 {posts.slice(3 * (activePageNumber-1), 3 * activePageNumber).map((post) => (
       
))}


```

##### pagination(useCallback)
```jsx
import React, { useState, useEffect, useCallback } from "react";
//calculatePageCounts
const calculatePageCounts = useCallback(() => {
    if (posts.length % 3 > 0) {
      return parseInt(posts.length / 3 + 1);
    }
    return parseInt(posts.length / 3);
  
  }, [posts]);
//
  useEffect(() => {
    setPageCounts(calculatePageCounts());
  },[posts, calculatePageCounts])
// handleClickOnPages
const handleClickOnPages = useCallback((pageNumber) => {
    setActivePageNumber(pageNumber);
  },[]);


```



