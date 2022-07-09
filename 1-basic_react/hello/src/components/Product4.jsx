import React, { Component } from "react";
import './product.css'

class Product4 extends Component {
  count = 10;
  imageUrl = "https:///picsum.photos/200";
  render() { 

      return (
        <div>        
          <span className='m-2 text-info'>product4 name</span>   
          {/* Conditional (ternary) operator */}
          {/* <span className='m-2 badge bg-primary'>{this.count === 0 ? 'zero' : this.count}</span>   */}
          {/* && */}
          <span className='m-2 badge bg-primary'>{this.count !== 0 && this.count}</span>  

          <button className='m-2 btn btn-sm btn-success'>+</button>
          <button className='m-2 btn btn-sm btn-warning'>-</button>
          <button className='m-2 btn btn-sm btn-danger'>delete</button>
          {/* inline */}
          {/* <img src={this.imageUrl} style={{ borderRadius: '20px' }} alt="pic" /> */}
          {/* external */}
          <img src={this.imageUrl}  alt="pic" />
        </div>
      );
  }

}

export default Product4;