import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const AddItems = () => {
  const [user] = useAuthState(auth);
  const [name, setName] = useState("");
  const [img, setImg] = useState("");
  const [body, setBody] = useState("");
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);


  const handleSubmit = (event) => {
    event.preventDefault();

    // validation need

    // make product for post product
    const postProduct = {
      name,
      img,
      body,
      price,
      quantity,
      email: user.email,
    };

    axios
      .post("/products", postProduct)
      .then((res) => {
        console.log(res.data);
        toast("add items successful");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <button type="submit" className="btn btn-success">
          submit
        </button>
      </form>
    </div>
  );
};

export default AddItems;
