import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Details = () => {
    const {id} =useParams()
    const [products, setProducts] = useState({});
  useEffect(() => {
    fetch("/product.json")
      .then((res) => res.json())
      .then((data) => {
          const selected = data.find((item)=>(item.id==id))
         setProducts(selected)
         
      });
  }, [id]);
    return (
        <div className='container d-flex'>
            <div>
            <img className='img-fluid img-style' src={products?.img} alt="" />
            </div>
            <div>
            <h1>{products?.name}</h1>
            <p>{products?.body}</p>
            </div>
        </div>
    );
};

export default Details;