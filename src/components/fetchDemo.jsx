import React, { useEffect, useState } from "react";
import useProductHook from "../hooks/useProductHook";
import handleDeleteProduct from "../hooks/useProductHook";
import { useNavigate, Link, useParams } from "react-router-dom";
import "./FetchDemo.css";

const FetchDemo = () => {
  const { productData, loading, handleDeleteProduct, AddtoCart } = useProductHook();
  const navigate = useNavigate();
 
  return (
    <div className="product-container">
      {loading === true && <h1>Loading...</h1>}
      {productData.map((product) => {
        return (
          <div className="product" key={product._id}>
            <h5>Title: {product.title}</h5>
            {/* <p>Description: {product.description}</p> */}
            <p>Price: {product.price}</p>
            
            <button onClick={() => navigate(`/products/${product._id}`)}>
                details
              </button>

              <button onClick={() => handleDeleteProduct(product._id)}>Delete</button>
              <button onClick={() => navigate(`/products/update/${product._id}`)}>
              Update
              </button>
              <br></br>
               <button onClick={() => AddtoCart(product._id)}>
                Add to cart
              </button> 

              
          </div>
        );
      })}
    </div>
  );
};

export default FetchDemo;