import React from "react";

// handleDecrement out  of component
// const handleDecrement = (count,setCount) => {
//   setCount(count-1)
  
// }

const Product = (props) => {
  // props
  const { productName,count,onDelete,id,onIncrement,onDecrement} = props;
  // const [count, setCount] = useState(propCount);
  const handleIncrement = () => {    
    // setCount(count+1)
    onIncrement(id)
   
  }
  const handleDecrement = () => {
    onDecrement(id)
  
}

  // const handleDelete = (itemNumber) => {
  //   console.log(itemNumber);
  // }
  function handleDelete(){
    onDelete(id);
  }
  const format = ()=>{
    if (count === 0) {
      return 'zero';
    } else {
      return count;
    }
  }
  return (
    <div>    
      {/* props */}
      {/* <span className='m-2 text-info'>{props.productName}</span>  */}
      <span className='m-2 text-info'>{productName}</span>   
      
      {/* format */}
      <span className='m-2 badge bg-primary'>{format()}</span>
      
      {/* + */}
      <button onClick={handleIncrement} className='m-2 btn btn-sm btn-success'>+</button>

      {/* - */}
      {/* ()=>handleDecrement(count,setCount) */}
      {/* <button onClick={() => handleDecrement(count, setCount)} className='m-2 btn btn-sm btn-warning'>-</button> */}
      <button onClick={handleDecrement} className='m-2 btn btn-sm btn-success'>-</button>

      {/* delete */}
      {/* <button onClick={() => handleDelete(55)} className='m-2 btn btn-sm btn-danger'>delete</button> */}
      <button onClick={handleDelete} className='m-2 btn btn-sm btn-danger'>delete</button>

      
      
    </div>
  );
  
}


export default Product;