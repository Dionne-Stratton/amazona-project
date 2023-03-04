import React from "react";
import { useParams } from "react-router-dom";

function ProductScreen(props) {
  const { slug } = useParams();
  console.log(props);
  return (
    <div>
      <h1>Product Screen: {slug}</h1>
    </div>
  );
}

export default ProductScreen;
