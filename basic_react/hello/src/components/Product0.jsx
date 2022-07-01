import React,{ Component } from "react";

class Product0 extends Component {
 
  render() {   
    return (
      <div>        
        <span className='m-2 text-info'>product0 name</span>
        {/* <span  className='m-2 badge bg-primary'>2</span> */}
        {/* <span className='m-2 badge bg-primary'>{2+2 }</span> */}
        {/* point is this */}
        <span className='m-2 badge bg-primary'>{ this.format()}</span>
        <button className='m-2 btn btn-sm btn-success'>+</button>
        <button className='m-2 btn btn-sm btn-warning'>-</button>
        <button className='m-2 btn btn-sm btn-danger'>delete</button>        
      </div>
      );
  }
  format() {
   return <a >Zero</a>;
  }
 
}

export default Product0;