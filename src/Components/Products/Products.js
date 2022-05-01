import axios from "axios";
import React from "react";
import { Card, CardGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Products.css";
const Products = ({product, setLoading}) => {
  const { _id, img, name, quantity, body, price } = product;


  const handleRemove = () => {
    axios.delete(`/product/${_id}`).then((res) => {
      console.log(res.data);
      setLoading(true)
    });
  };

  return (
    <div className="user-card mt-5">
      <CardGroup className="">
        <Card className="">
          <Card.Img className="img-size" variant="top" src={img} />
          <Card.Body>
            <Card.Title className="text-success fw-bold fs-4">
              {name}
            </Card.Title>
            <Card.Title>
              Price: <span className="text-danger fw-bold">$ {price}</span>
            </Card.Title>
            <Card.Text> <span className="fw-bold">Short Description about the product :</span> {body}</Card.Text>
          </Card.Body>
            <Card.Text className="ms-3 fw-bold">Quantity We Have : <span className="text-primary ">{quantity}</span> </Card.Text>
          
          <Card.Footer>
            <Link
              to={`/details/${_id}`}
              className="btn text-white  glow-on-hover pt-2  fw-bold d-block w-100"
            >
              Update Info
            </Link>
            <button className="btn mt-2 rounded w-100 btn-danger" onClick={handleRemove}>
        Remove Item
      </button>
          </Card.Footer>
        </Card>
      </CardGroup>

      
    </div>
  );
};

export default Products;
