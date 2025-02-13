import React from "react";
import SingleCard from "./SingleCard";
import { useSelector } from "react-redux";

const Product = () => {
  const data = useSelector((p) => p.product);

  return (
    <div className="product">
      {data.map((item) => (
        <SingleCard allitems={item} />
      ))}
    </div>
  );
};

export default Product;
