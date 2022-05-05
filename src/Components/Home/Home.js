import axios from "axios";
import React, { useEffect, useState } from "react";
import carousel from "../../img/banner.png";
import { Carousel} from "react-bootstrap";
import { Link } from "react-router-dom";
import owner from "../../img/owner.png";
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
        <Link className="btn btn-info text-white my-4" to={"/inventory"}>
          Check All Inventory
        </Link>
      </p>
      <div className="bannerSecond py-5">
        <div className="container">
          <h1>This is our Inventory products</h1>
          <p>
            This is very good quality product. <br /> This website is only for
            the company employee. <br /> Here the employee can add product to
            the inventory.
          </p>
          <Link to="/addItems" className="btn btn-success ">
            Go to Add Product
          </Link>
        </div>
      </div>

      <div className="container my-5">
        <div className="row d-flex align-items-center justify-content-center">
          <div className="col-md-6">
            <img src={owner} className="img-resize img-fluid" alt="" />
          </div>
          <div className="col-md-6 mt-4">
            <h2 className="text-info fw-bold">Know About Our Owner</h2>
            <p className="text-small">
              Our owner is a very dedicative person in the industry. Here we store product from the very first day of founding our company. Our MD sir always look after the company work. Every employ of the company should follow the company role. By following the rules we can make our company better and better.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
