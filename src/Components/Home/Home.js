import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Products from "../Products/Products";
import "./Home.css";
const Home = () => {
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
      <h1 className="text-center mt-5 fw-bold">Stock <span className="text-info">Products</span></h1>
      <div className="container d-flex justify-content-center">
        <div className="card-compo ">
          {products.map((product,index) => (
            index<6&&<Products key={product.id} product={product}></Products>
          ))}
        </div>
        
      </div>
      <p className="text-center "><Link className="btn btn-info text-white mt-4" to={'/inventory'}>Check All Inventory</Link></p>
      
    </div>
  );
};

export default Home;
