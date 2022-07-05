import "./Product.css";
import { useParams } from "react-router-dom";
import Button from "../Button/Button";
import Image from '../Image/Image';
import ProductList from '../App/PRODUCTS.json'
const ProductId = () => {
  const {pid} = useParams();
  const data = ProductList.filter(item => item.id === pid)[0]
  return (
  <li className="ProductItem visible">
    <h3>{data.name}</h3>
  
    {/* props */}
    <Image imgSrc={data.image} style={{ width: "200px", height: "200px" }} /> 
    <span>Price:{data.price}</span>
   
    {/* props */}
    {/* <Button text='click here' /> */}

    {/* children */}
    <Button>Add to cart</Button>
  </li>
);
  }

export default ProductId;
