import React,{ Component } from "react";

class Product1 extends Component {

  render() {   
    // An array of elements
    const list = [
      <li>item one</li>,
      <li>item two</li>,
      <li>item three</li>,
      <li>item four</li>
    ]
    
      return (
        <div>        
          <span className='m-2 text-info'>product1 name</span>  
          <span className='m-2 badge bg-primary'>{ this.format()}</span>  
          <button className='m-2 btn btn-sm btn-success'>+</button>
          <button className='m-2 btn btn-sm btn-warning'>-</button>
          <button className='m-2 btn btn-sm btn-danger'>delete</button>
          <ul>
            {list}    
          </ul>
        </div>
      );
  }
  format() {
    return <a >Zero</a>;
   }
    
}

export default Product1;