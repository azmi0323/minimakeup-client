import axios from "axios";
import React, { useEffect, useState } from "react";

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
    <div>
      <h2>This is my items</h2>
    </div>
  );
};

export default MyItems;
