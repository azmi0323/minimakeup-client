import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
const Details = () => {
  const { id } = useParams();
  const [products, setProducts] = useState({});
  useEffect(() => {
    axios.get(`/products/${id}`).then((res) => setProducts(res.data));
  }, [id]);
  return (
    <div className="container my-5">
      <div class="card mb-3">
        <div class="row g-0">
          <div class="col-md-4 p-0 p-lg-4">
            <img
              src={products?.img}
              className="img-fluid rounded-start mt-5"
              alt="..."
            />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">{products.name}</h5>
              <h6 class="card-title">Price : {products.price}</h6>
              <p class="card-text">Details : {products.body}</p>
              <p class="card-text">Quantity : {products.quantity}</p>
              <p class="card-text">Supplier : {products.supplier}</p>
              <button className="btn btn-danger">Delivered</button>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Details;
