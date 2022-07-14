import React, { useContext } from "react";
import "./ProductItem.css";
import Image from "../Image/Image";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import ThemeContext from "../../contexts/ThemeContext";

const ProductItem = ({ data }) => {
  const themeValues = useContext(ThemeContext);
  console.log(themeValues);

  return (
    <li className="ProductItem">
      <Link to={`/product/${data.id}`}>
        <h3>{data.name}</h3>
      </Link>
      <Image
        imgSrc={data.image}
        customStyle={{ width: "150px", height: "100px" }}
        alt="productpic"
      />
      <br/>
      <span>Price: {data.price}</span>
      <Button
        style={{
          padding: "10px",
          width:"100px",
          color: themeValues.theme.color,
          borderColor: themeValues.theme.color,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        Add to cart
      </Button>
    </li>
  );
};

export default ProductItem;
