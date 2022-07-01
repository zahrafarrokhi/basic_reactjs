import React, { Component } from "react";

class Product6 extends Component {
  count = 5;
 
  render() { 

      return (
        <div>        
          <span className='m-2 text-info'>produc6 name</span>           
          <span className='m-2 badge bg-primary'>{ this.format()}</span>
          <button onClick={this.handleIncrement} className='m-2 btn btn-sm btn-success'>+</button>
          <button onClick={this.handleDecrement} className='m-2 btn btn-sm btn-warning'>-</button>
          <button onClick={() => this.handleDelete(55)} className='m-2 btn btn-sm btn-danger'>delete</button>
          
        
        </div>
      );
  }
  handleIncrement = () => {
    console.log('increment',this);
  }

  handleDecrement = () => {
    console.log('decrement');
  }
  handleDelete = (itemNumber) => {
    console.log(itemNumber);
  }
  
  format(){
    if(this.count === 0){
      return 'zero';
    }else{
      return this.count;
    }
  }

 
}

export default Product6;