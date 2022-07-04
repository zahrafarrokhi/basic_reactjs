import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Products.css";

const Products = () => {
  const [data, setData] = useState([]);

  // herokuapp
  // const getList = async () => {
  //   try {
  //     let response = await axios.get('https://mysite-dev2020.herokuapp.com/products/',)
  //     setData(response.data);
  //   } catch (e) {}
  // };

  // https://fakestoreapi.com/docs
  const getList = async () => {
     // let res = fetch('https://fakestoreapi.com/products?limit=5')
      
    //   // .then(res => res.json())
    //   setData(res);
    try {
      let response = await axios.get("https://fakestoreapi.com/products/");
      setData(response.data);
    } catch (e) {}
   
  };
  useEffect(() => {
    getList();
  }, []);

  return (
<div className="container">
      <div className="row ">
          <div class="col-6 col-md-4">
        {/*  herokuapp */}
        {/* <div className="products">
        {data.map((item) => (
          <div className="card" key={item.id}>
            <img src="https://i.pravatar.cc/300" />
            <h1>{item.name} </h1>
            <h2>{item.price}</h2>
          </div>
        ))}
      </div> */}

        {/* https://fakestoreapi.com/docs */}

        <div className="products">
          {data.map((item) => (
            <div className="card" key={item.id}>
              <img src={item.image} />
              <h4>{item.title} </h4>
              <h2>{item.price}</h2>
              <p>{item.description}</p>
              <h3>{item.category}</h3>
            </div>
          ))}
          </div>
          </div>
      </div>
    </div>
  );
};

export default Products;
