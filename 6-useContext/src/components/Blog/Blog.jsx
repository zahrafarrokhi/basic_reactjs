import React, { useState, useEffect, useCallback } from "react";
import Button from "../Button/Button";
// import Image from "../Image/Image";
import POSTS from "./POSTS.json";
import "./Blog.css";

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [pageCounts, setPageCounts] = useState(0);
  const [activePageNumber,setActivePageNumber] = useState(1)

  const handleLoadPosts = () => {
    setLoading(false);
    setLoaded(true);
    setTimeout(() => {
      setPosts(POSTS);
      setLoading(true);
    }, 1000);
  };
  //didMount
  useEffect(() => {
    console.log("useEffect");
    handleLoadPosts();
  }, []);
  //didUpdate
  useEffect(() => {
    console.log("loaded changed");
  }, [loaded]);

  //1
  // const calculatePageCounts = () => {
  //   if (posts.length % 3 > 0) {
  //     return parseInt(posts.length / 3 + 1);
  //   }
  //   return parseInt(posts.length / 3);
  // };
//2
  const calculatePageCounts = useCallback(() => {
    if (posts.length % 3 > 0) {
      return parseInt(posts.length / 3 + 1);
    }
    return parseInt(posts.length / 3);
  }, [posts]);
  // useEffect(() => {
  //   // calculatePageCounts();
  //   setPageCounts(calculatePageCounts());
  // }, [posts]);

  useEffect(() => {
    setPageCounts(calculatePageCounts());
  },[posts, calculatePageCounts])
  console.log("pageCounts", pageCounts);

  //handleClickOnPages
  //1
  // const handleClickOnPages = (pageNumber) => {
  //   setActivePageNumber(pageNumber);
  // }
  //2(useCallback)
  const handleClickOnPages = useCallback((pageNumber) => {
    setActivePageNumber(pageNumber);
  },[]);

  return (
    <div className="Blog">
      <Button handleClick={handleLoadPosts}>
        {loading ? "loading" : "Load POSTS "}
      </Button>
      {posts.length === 0 && <div>No Posts</div>}

      {posts.length > 0 && (
        <ul>
          {/* slice */}
          {/* {posts.slice(0, 3).map((post) => (
            
          ))} */}
          {posts.slice(3 * (activePageNumber-1), 3 * activePageNumber).map((post) => (
            <li>
              <h3>{post.title}</h3>
              <img
                src={post.image}
                style={{ width: "100px", height: "70px" }}
                alt={post.name}
              />
              {/* <Image
                imgSrc={post.image}
                customStyle={{ width: "100px", height: "100px" }}
                alt={post.name}
              /> */}
              <p>{post.content}</p>
            </li>
          ))}
        </ul>
      )}

      <div>
        <ul className="Pagination">
          {/* <li>
            <Button>1</Button>
          </li>
          <li>
            <Button>2</Button>
          </li> */}
          {new Array(pageCounts).fill(0).map((item, index) => (
            <li className={activePageNumber === index + 1 ? "active" : ""}>
              <Button handleClick={() => handleClickOnPages(index+1)}>
                {index + 1}
              </Button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Blog;
