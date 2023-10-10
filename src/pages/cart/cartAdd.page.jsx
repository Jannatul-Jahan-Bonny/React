import React from "react";
//import RegistrationForm from "../../components/cart/registrationForm";
import { Link } from "react-router-dom";
import "../HomePage.css";

const CartPage = () => {
  return <div>
    <div  className="container">
      <div className="header">
        <h1>Welcome to the Online Bookstore</h1>
      </div>
      <div className="navbar">
        <Link to="/">
          Home
        </Link>
        <Link to="/login">Login</Link>
        <Link to="/products">Products</Link>
        <Link to="/registration">Registration</Link>
        <Link to="/cart" className="active">Cart</Link>
      </div>
    </div>
    
    {/* <RegistrationForm /> */}
    <Link to={`/products`}> #Back to select product</Link> 
    </div>;
};

export default CartPage;