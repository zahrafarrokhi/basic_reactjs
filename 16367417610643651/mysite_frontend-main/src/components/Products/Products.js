import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './Products.css';

const Products = () => {
  const [data, setData] = useState([]);
  
  
  const getList = async()=>{

    try{
    let response = await axios.get('https://mysite-dev2020.herokuapp.com/products/', )
        setData(response.data)
    }
    catch (e){

    }
  }
  useEffect (()=>{getList()},[])
  return (
    <div>
      

      <div className="products">
        {data.map((item) => (
        <div className="card" key={item.id}>
            <img src="https://i.pravatar.cc/300"/>
            <h1>{item.name} </h1>
            <h2>{item.price}</h2>
        
        </div>
        
        ))}
      </div>
    </div>
  );
};

export default Products;
