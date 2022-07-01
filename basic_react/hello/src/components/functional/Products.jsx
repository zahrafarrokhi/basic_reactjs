// import React,{useState} from "react";
// import Product from './Product';


// const Products = () => {
//   const [products,setProducts] = useState([
//     { id: 1, count: 2, productName: 'F_laptop' },
//     { id: 2, count: 1, productName: 'F_phone' },
//     { id: 3, count: 4, productName: 'F_airpod' },

//  ])
//   return (
//     <div> 
//       <button onClick={handleReset} className='btn btn-primary'>Reset</button>

//       {/* <Product productName='phone' />
//       <Product productName='airpod' />  */}
//         {
//           products.map((p, index) => (
           
//             <Product onIncrement={handleIncrement} onDecrement={handleDecrement} onDelete={handleDelete} id={p.id} key={index} productName={p.productName} count={p.count} />

               
//           ))
//        }
//     </div>
//   );
//   function handleDelete(productId) {
//     const newProducts = products.filter((p) => p.id !== productId);
//     setProducts(newProducts);
//   }

//   function handleIncrement (productId) {
//     const newProducts = [...products];
//     const index = newProducts.findIndex(p => p.id === productId);
//     newProducts[index].count += 1;
//     setProducts(newProducts);
//  }
  
//  function handleDecrement(productId) {
//     const newProducts = [...products];
//     const index = newProducts.findIndex(p => p.id === productId);
//     newProducts[index].count -= 1;
//     setProducts(newProducts);
//  }
  
//  function handleReset(){
//   // console.log('handleReset');
//   const newProducts = products.map(p=>{
//     p.count = 0;
//     return p
//   });
//   setProducts(newProducts);
// }
// }


// export default Products;
// import React from "react";
// import Product from "./Product";

// const Products = ({products,onIncrement,onDecrement,onDelete,onReset}) => {
  
//   return (
//     <div>
//         <button onClick={onReset} className="btn btn-primary">
//         Reset
//       </button>
//       {products.map((p, index) => (
//         <Product
//           onIncrement={onIncrement}
//           onDecrement={onDecrement}
//           onDelete={onDelete}
//           id={p.id}
//           key={index}
//           productName={p.productName}
//           count={p.count}
//         />
//       ))}
//      </div>
//   );

  
// };

// export default Products;

import Product from "./Product";
import React,{useContext} from 'react';
import ProductsContext from "./../../context/products";


const Products = (props) => {
  const productsContext  = useContext(ProductsContext);
  return (
    <div>
   
      <button onClick={productsContext.onReset} className="btn btn-primary">
        Reset
      </button>
      {productsContext.products.map((p, index) => (
        <Product
          id={p.id}
          key={index}
          productName={p.productName}
          count={p.count}
        />
      ))}
    </div>
  );

  
};

export default Products;