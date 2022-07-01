// // imrc
// import React, { Component } from 'react';
// import Product8 from './Product8';
// // cc
// class  Products extends Component {
//   state = { 
//     products: [
//       { id: 1, count: 2, productName: 'C_laptop' },
//       { id: 2, count: 1, productName: 'C_phone' },
//       { id: 3, count: 4, productName: 'C_airpod' },
      
//       ]

//    } 
//   render() { 
//     return (
      
//       <div>
//        <button onClick={this.handleReset} className='btn btn-primary'>Reset</button>

//        {/* <Product7 productName='laptop' />
//        <Product7 productName='phone' />
//        <Product7 productName='airpod' />       */}
//         {
//           this.state.products.map((p, index) => (
           
//             <Product8 onIncrement={this.handleIncrement} onDecrement={this.handleDecrement} onDelete={this.handleDelete} id={p.id} key={index} productName={p.productName} count={p.count} />

               
//           ))
//        }
//       </div>
//       );
//   }

//  handleDelete = (productId) => {
//     // console.log(productId);
//     const newProducts = this.state.products.filter(p => p.id !== productId);
//     this.setState({products: newProducts});
//   }

//  handleIncrement = (productId) => {
//     const newProducts = [...this.state.products];
//     const index = newProducts.findIndex(p => p.id === productId);
//     newProducts[index].count += 1;
//     this.setState({products: newProducts});
//  }
  
//  handleDecrement = (productId) => {
//     const newProducts = [...this.state.products];
//     const index = newProducts.findIndex(p => p.id === productId);
//     newProducts[index].count -= 1;
//     this.setState({products: newProducts});
//  }
  
//  handleReset = () => {
//     // console.log('handleReset');
//     const newProducts = this.state.products.map(p=>{
//       p.count = 0;
//       return p
//     });
//     this.setState({products: newProducts});
//   }
// }
 
// export default Products;


// sibiling
// import React, { Component } from 'react';
// import Product8 from './Product8';

// class Products extends Component {
  
//   render() { 
//     return (<div>
     
//      <button onClick={this.props.onReset} className='btn btn-primary'>Reset</button>
//         {this.props.products.map((p,index) => (
//           <Product8 onIncrement={this.props.onIncrement} onDecrement={this.props.onDecrement} onDelete={this.props.onDelete} id={p.id} key={index} productName={p.productName} count={p.count} />
//         ))}
//    </div>)
//   }

  
// }
 
// export default Products;

import React, { Component } from 'react';
import Product8 from './Product8';
import ProductContext from "./../context/products";

class Products extends Component {
  static contextType = ProductContext;

  // constructor(props){
  //   super(props);
  //   console.log('Products - constructor');
  // }

  // componentDidMount(){
  //   console.log('Products - didMount');
  // }
  componentDidUpdate(){
    console.log('Products - didUpdate');
  }
  
  render() { 
    console.log('Products - render');
    return (
      <div>
     
        <button onClick={this.context.onReset} className='btn btn-primary'>Reset</button>
        {this.context.products.map((p,index) => (
          <Product8  id={p.id} key={index} productName={p.productName} count={p.count} />
        ))}
      </div>
    );
  }

  
}
 
export default Products;