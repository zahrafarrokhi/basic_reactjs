// import React, { Component } from "react";

// class Product8 extends Component {

//   render() { 
//     // props
//     const { productName } = this.props;
//       return (
//         <div>   
//           {/* props */}
//           <span className='m-2 text-info'>{productName}</span>        
//           <span className='m-2 badge bg-primary'>{ this.format()}</span>
//           <button onClick={this.handleIncrement} className='m-2 btn btn-sm btn-success'>+</button>
//           <button onClick={this.handleDecrement} className='m-2 btn btn-sm btn-warning'>-</button>
//           <button onClick={this.handleDelete} className='m-2 btn btn-sm btn-danger'>delete</button>

//         </div>
//       );
//   }
//  handleIncrement = () => {
//     this.props.onIncrement(this.props.id);
//   }

//  handleDecrement = () => {
//     this.props.onDecrement(this.props.id);
//   }
 
//  handleDelete =()=>{
//     this.props.onDelete(this.props.id);
//   }
 
  
 
//   format(){
//     if(this.props.count === 0){
//       return '0';
//     }else{
//       return this.props.count;
//     }
//   }
 
// }

// export default Product8;

import React,{ Component } from "react";
import './product.css'
import ProductContext from "./../context/products";

class Product extends Component {
  static contextType = ProductContext;

  // constructor(props){
  //   super(props);
  //   console.log('Product - constructor');
  // }

  // componentDidMount(){
  //   console.log('Product - didMount');
  // }
  componentDidUpdate(){
    console.log('Product - didUpdate');
  }
  componentWillUnmount(){
    console.log('Product - WillUnmount');
  }
  render() {
    console.log('Product - render');
    const {productName} = this.props;
    return (
      <div>
        <span  className='m-2 text-info'>{productName}</span>
        <span  className='m-2 badge bg-primary'>{this.format()}</span>
        <button onClick={this.handleIncrement} className='m-2 btn btn-sm btn-success'>+</button>
        <button onClick={this.handleDecrement} className='m-2 btn btn-sm btn-warning'>-</button>
        <button onClick={this.handleDelete} className='m-2 btn btn-sm btn-danger'>delete</button>
      </div>
    );
  }

  handleIncrement = ()=>{
    this.context.onIncrement(this.props.id);
  }

  handleDecrement =()=>{
    this.context.onDecrement(this.props.id);
  }

  handleDelete =()=>{
    this.context.onDelete(this.props.id);
  }

  format(){
    if(this.props.count === 0){
      return 'zero';
    }else{
      return this.props.count;
    }
  }
}

export default Product;