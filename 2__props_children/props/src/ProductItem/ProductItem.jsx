import "./ProductItem.css";
import Button from "../Button/Button";
import Image from "../Image/Image";
const ProductItem = ({ data }) => (
  <li className="ProductItem visible">
    <h3>{data.name}</h3>

    {/* props */}
    <Image
      imgSrc={data.image}
      customStyle={{ width: "200px", height: "200px" }}
      alt={data.name}
    />
    <span>Price:{data.price}</span>

    {/* props */}
    {/* <Button text='click here' /> */}

    {/* children */}
    <Button>Add to cart</Button>
  </li>
);

export default ProductItem;
