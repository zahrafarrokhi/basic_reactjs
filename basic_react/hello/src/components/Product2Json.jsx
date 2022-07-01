import React, { Component } from "react";
import PRODUCTS from './PRODUCTS.json'


class Product2Json extends Component {

  render() {   
      console.log('PRODUCTS',PRODUCTS)
      return (
        <div>        
          <ul>        
            {/* {PRODUCTS.map((item) => (<li >{item}</li>))}  */}
            {PRODUCTS.map((item) => (
              <li >
                <h3>{item.name}</h3>
                <image src={item.image} style={{ width:'200px', height:'200px',}}    />
                <span>Price:{item.price}</span>
              
              </li>))
            } 
            
          </ul>
        </div>
      );
  }
    
}

export default Product2Json;