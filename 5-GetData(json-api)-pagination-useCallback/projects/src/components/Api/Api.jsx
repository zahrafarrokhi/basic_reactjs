import React, { useState,useEffect } from "react";
import Image from "../Image/Image";


const Api = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  

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
 
  return (
    <div className="Blog">
     
      {loading && <div>loading</div>}
      
      {posts.length === 0 && <div>No Posts</div>}

      {posts.length > 0 && (
        <ul >
          {posts.map((post) => (
            <li >
              <div>{post.title}</div>
              {/* <img src={post.image} style={{ width: "100px", height: "100px" }} /> */}
              <Image
                imgSrc={post.image}
                customStyle={{ width: "100px", height: "100px" }}
                alt={post.name}
              />
              <p>{post.content}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Api;
