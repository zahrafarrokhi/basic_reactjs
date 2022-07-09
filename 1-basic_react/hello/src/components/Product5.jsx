
import React,{ Component } from "react";

class Product5 extends Component {
  count = 10;
  // count = 5;
  render() { 

    return (
    <div>
        {
          this.count !== 5 ? (
            <div>        
            <span className='m-2 text-info'>product5 name</span>           
            <span className='m-2 badge bg-primary'>{ this.count === 0 ? 'zero' : this.count}</span>  
            <button className='m-2 btn btn-sm btn-success'>+</button>
            <button className='m-2 btn btn-sm btn-warning'>-</button>
            <button className='m-2 btn btn-sm btn-danger'>delete</button>
          
          </div>
          ) : (
              <h1>there is no product</h1>
          )
    }
   </div>    
      );
  }

}

export default Product5;

