import React,{ Component } from "react";

class Product3 extends Component {
  // 2.create attribute
  // before render
  count = 0;
  render() {   

    // 1.const
    // const count = 0;
   
      return (
        <div>        
          <span className='m-2 text-info'>product3 name</span>  
          {/* 1.const */}
          {/* <span className='m-2 badge bg-primary'>{this.format(count)}</span>   */}

          {/*  2.create attribute*/}
          <span className='m-2 badge bg-primary'>{ this.format()}</span>  
          <button className='m-2 btn btn-sm btn-success'>+</button>
          <button className='m-2 btn btn-sm btn-warning'>-</button>
          <button className='m-2 btn btn-sm btn-danger'>delete</button>
        
        </div>
      );
  }
  // 1.const
  // format(count){
  //   if(count === 0){
  //     return 'zero';
  //   }else{
  //     return count;
  //   }
  // }

    
  // 2.create attribute
  format(){
    if(this.count === 0){
      return 'zero';
    }else{
      return this.count;
    }
  }
}

export default Product3;