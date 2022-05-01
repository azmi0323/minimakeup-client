import React, { useEffect, useState } from "react";
import Products from "../Products/Products";
const Inventory = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("product.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div>
      <div className="container d-flex justify-content-center">
        <div className="card-compo ">
          {products.map((product) => (
            <Products key={product.id} product={product}></Products>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Inventory;
