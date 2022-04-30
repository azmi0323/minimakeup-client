import React from "react";
import { Card, CardGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Products.css";
const Products = (props) => {
  const { img, name, body, id, price } = props.product;


  return (
    <div className="user-card mt-5">
      <CardGroup className="">
        <Card className="">
          <Card.Img variant="top" src={img} />
          <Card.Body>
            <Card.Title className="text-success fw-bold fs-2">
              {name}
            </Card.Title>
            <Card.Title>
              Price: <span className="text-danger fw-bold">$ {price}</span>
            </Card.Title>
            <Card.Text>{body}</Card.Text>
          </Card.Body>
          <Card.Footer>
            <Link to={`/checkOut/${id}`}
              
              className="btn btn-warning fw-bold d-block w-100"
            >
              Book Now
            </Link>
          </Card.Footer>
        </Card>
      </CardGroup>
    </div>
  );
};

export default Products;
