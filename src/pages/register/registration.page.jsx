import React from "react";
import RegistrationForm from "../../components/register/registrationForm";
import { Link } from "react-router-dom";
import "../HomePage.css";

const RegistrationPage = () => {
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
        <Link to="/registration" className="active">Registration</Link>
      </div>
    </div>
    
    <RegistrationForm /></div>;
};

export default RegistrationPage;