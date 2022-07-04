import "./ProductItem.css";
import Image from '../Image/Image'
import { Link } from "react-router-dom";
import Button from "../Button/Button";
const ProductItem = ({ data }) => (
  <Link to={`/product/${data.id}`}>
  <li className="ProductItem visible">
    <h3>{data.name}</h3>
  
    {/* props */}
    <Image imgSrc={data.image} style={{ width: "200px", height: "200px" }} alt="productpic"/> 
    <span>Price:{data.price}</span>
   
    {/* props */}
    {/* <Button text='click here' /> */}

    {/* children */}
    <Button>Add to cart</Button>
  </li>
  </Link>
);

export default ProductItem;
