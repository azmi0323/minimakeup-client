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
            <Link to={`/details/${id}`}
              
              className="btn text-white  glow-on-hover pt-2  fw-bold d-block w-100"
            >
              Update Info
            </Link>
          </Card.Footer>
        </Card>
      </CardGroup>
    </div>
  );
};

export default Products;
