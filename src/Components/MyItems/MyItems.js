import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";

const MyItems = () => {
  const [items, setItems] = useState([]);

  const token = localStorage.getItem("token");

  useEffect(() => {
    axios
      .get("/myItems", {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => setItems(res.data));
  }, [token]);

  return (
    <div className="container">
        <div className="my-2  row row-cols-md-3">
      {items.map((item) => (
        <div  className="" key={item._id}>
          {
            <div className="col">
              <Card className="user-card">
                <Card.Img className="img-size" variant="top" src={item.img} />
                <Card.Body>
                  <Card.Title className="text-success fw-bold fs-4">
                    {item.name}
                  </Card.Title>
                  <Card.Title>
                    Price:{" "}
                    <span className="text-danger fw-bold">$ {item.price}</span>
                  </Card.Title>
                  <Card.Text>
                    {" "}
                    <span className="fw-bold">
                      Short Description about the product :
                    </span>{" "}
                    {item.body}
                  </Card.Text>
                </Card.Body>
                <Card.Text className="ms-3 fw-bold">
                  Quantity We Have :{" "}
                  <span className="text-primary ">{item.quantity}</span>{" "}
                </Card.Text>
                <Card.Text className="ms-3 fw-bold">
                  Supplier :{" "}
                  <span className="text-primary ">{item.supplier}</span>{" "}
                </Card.Text>
              </Card>
            </div>
          }
        </div>
      ))}
    </div>
    </div>
  );
};

export default MyItems;
