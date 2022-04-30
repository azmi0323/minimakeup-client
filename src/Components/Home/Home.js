import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Products from "../Products/Products";
import "./Home.css";
const Home = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("product.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div>
      <h1 className="text-center mt-5 fw-bold">Our <span className="text-warning">Services</span></h1>
      <div className="container d-flex justify-content-center">
        <div className="card-compo ">
          {products.map((product,index) => (
            index<3&&<Products key={product.id} product={product}></Products>
          ))}
        </div>
        
      </div>
      <p className="text-center"><Link className="btn btn-danger" to={'/services'}>See all Services</Link></p>
    </div>
  );
};

export default Home;
