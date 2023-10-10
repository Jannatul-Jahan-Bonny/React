import React from "react";
import LoginForm from "../../components/register/loginForm";
import { Link } from "react-router-dom";
import "../HomePage.css";

const LoginPage = () => {
  return <div>
    <div  className="container">
      <div className="header">
        <h1>Welcome to the Online Bookstore</h1>
      </div>
      <div className="navbar">
        <Link to="/">
          Home
        </Link>
        <Link to="/login" className="active">Login</Link>
        <Link to="/products">Products</Link>
        <Link to="/registration">Registration</Link>
      </div>
    </div>
    
    <LoginForm /></div>;
};

export default LoginPage;