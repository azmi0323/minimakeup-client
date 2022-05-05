import axios from "axios";
import React, { useEffect, useState } from "react";
import carousel from "../../img/banner.png";
import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import Products from "../Products/Products";
import "./Home.css";
const Home = () => {
  const [products, setProducts] = useState([]);
  //   loading
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    axios.get("/products?limit=6").then((res) => {
      setProducts(res.data);
      setLoading(false);
    });
  }, [loading]);
  return (
    <div>
      <div className="">
        <Carousel>
          <Carousel.Item>
            <img className="d-block w-100" src={carousel} alt="First slide" />
            <Carousel.Caption>
              <h1 className="text-danger fw-bold">
                Best Authentic Product <br /> Of Bangladesh
              </h1>
              <p>Here you can add more product as a employee of this company</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <h1 className="text-center mt-5 fw-bold">
        Stock <span className="text-info">Products</span>
      </h1>
      <div className="container d-flex justify-content-center">
        <div className="card-compo ">
          {products.map((product) => (
            <Products key={product._id} product={product}></Products>
          ))}
        </div>
      </div>
      <p className="text-center ">
        <Link className="btn btn-info text-white mt-4" to={"/inventory"}>
          Check All Inventory
        </Link>
      </p>
      <div className="bannerSecond">
        <div className="container">
        <h1>This is our Inventory products</h1>
        <p>This is very good quality product. <br /> This website is only for the company employee. <br /> Here the employee can add product to the inventory.</p>
        <Link to='/addItems' className="btn btn-success">Go to Add Product</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
