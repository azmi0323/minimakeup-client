import axios from "axios";
import React, { useEffect, useState } from "react";
import Products from "../Products/Products";
const Inventory = () => {
  const [products, setProducts] = useState([]);

    
  //   loading
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    axios("/products")
      .then((res) => {
        setProducts(res.data)
        setLoading(false)
      });
  }, [loading]);






  return (
    <div>
      <div className="container d-flex justify-content-center">
        <div className="card-compo ">
          {products.map((product) => (
            <Products key={product.id} setLoading={setLoading} product={product}></Products>
          ))}
        </div>
      </div>

    </div>
  );
};

export default Inventory;
