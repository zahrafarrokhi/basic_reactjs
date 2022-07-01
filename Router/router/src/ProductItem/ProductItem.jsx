import "./ProductItem.css";
import Button from "../Button/Button";
const ProductItem = ({ data }) => (
  <li>
    <h3>{data.name}</h3>
  
    {/* props */}
    <image imgSrc={data.image} style={{ width: "200px", height: "200px" }} /> 
    <span>Price:{data.price}</span>
   
    {/* props */}
    {/* <Button text='click here' /> */}

    {/* children */}
    <Button>Add to cart</Button>
  </li>
);

export default ProductItem;
