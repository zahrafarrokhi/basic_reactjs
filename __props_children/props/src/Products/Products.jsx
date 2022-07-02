import "./Products.css";
import ProductItem from "../ProductItem/ProductItem";
const Products = (props) => {
  // console.log('props', props)
  const { data } = props;
  return (
    <div className="products">
      <ul>
        {data.map((item) => (
          // <li>
          //   <h3>{item.name}</h3>
          //   <img
          //     src={item.image}
          //     style={{ width: "200px", height: "200px" }}
          //   />
          //   <span>Price:{item.price}</span>
          // </li>
          // props
          <ProductItem data={item} />
        ))}
      </ul>
    </div>
  );
};

export default Products;
