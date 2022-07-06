import React, { useState } from "react";
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
