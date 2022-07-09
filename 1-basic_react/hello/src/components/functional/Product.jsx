// import React from "react";
// const Product = ({productName, count, onDelete, id, onIncrement, onDecrement }) => {

//   return (
//     <div>
//       <span  className='m-2 text-info'>{productName}</span>
//       <span  className='m-2 badge bg-primary'>{format()}</span>
//       <button onClick={handleIncrement} className='m-2 btn btn-sm btn-success'>+</button>
//       <button onClick={handleDecrement} className='m-2 btn btn-sm btn-warning'>-</button>
//       <button onClick={handleDelete} className='m-2 btn btn-sm btn-danger'>delete</button>
//     </div>
//   );

//   function handleIncrement(){
//     onIncrement(id);
//   }

//   function handleDecrement(){
//     onDecrement(id);
//   }

//   function handleDelete(){
//     onDelete(id);
//   }

//   function format(){
//     if(count === 0){
//       return 'zero';
//     }else{
//       return count;
//     }
//   }
// }
 
// export default Product;


import React,{useContext,useEffect} from 'react';
import ProductsContext from "./../../context/products";

const Product = ({productName, count, id}) => {
  const productsContext = useContext(ProductsContext);
  
  useEffect(() => {
    return()=>{console.log('product-unmount')}
    
  },[]);

  return (
    <div>
      <span  className='m-2 text-info'>{productName}</span>
      <span  className='m-2 badge bg-primary'>{format()}</span>
      <button onClick={handleIncrement} className='m-2 btn btn-sm btn-success'>+</button>
      <button onClick={handleDecrement} className='m-2 btn btn-sm btn-warning'>-</button>
      <button onClick={handleDelete} className='m-2 btn btn-sm btn-danger'>delete</button>
    </div>
  );

  function handleIncrement(){
    productsContext.onIncrement(id);
  }

  function handleDecrement(){
    productsContext.onDecrement(id);
  }

  function handleDelete(){
    productsContext.onDelete(id);
  }

  function format(){
    if(count === 0){
      return 'zero';
    }else{
      return count;
    }
  }
}
 
export default Product;