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
        style={{ width: "200px", height: "200px" }}
        alt="productpic"
      />

      <span>Price: {data.price}</span>
      <Button
        style={{
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
