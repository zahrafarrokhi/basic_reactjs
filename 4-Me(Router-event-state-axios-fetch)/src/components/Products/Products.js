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
      fetch('https://fakestoreapi.com/products?limit=5')
      .then(res => {
        // console.log(res, res.json())
        res.json().then((data) => {
          console.log("Data", data)
          setData(data)
        }).catch((e) => console.log(e));
      }).catch((e) => console.log(e));

   
  };
  useEffect(() => {
    getList();
  }, []);

  return (
<div className="container">
      <div className="row ">
          <div className="">
        {/*  herokuapp */}
        {/* <div className="products">
        {data.map((item) => (
          <div className="card col-6 col-md-3 m-2" key={item.id}>
            <img src="https://i.pravatar.cc/300" />
            <h1>{item.name} </h1>
            <h2>{item.price}</h2>
          </div>
        ))}
      </div> */}

        {/* https://fakestoreapi.com/docs */}

        <div className="products">
          {data.map((item) => (
            <div className="card col-6 col-md-3 m-2" key={item.id}>
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
