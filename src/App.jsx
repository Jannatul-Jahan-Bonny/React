import { createContext, useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home.page";
import ProductsPage from "./pages/products.page";
import RegistrationPage from "./pages/register/registration.page";
import LoginPage from "./pages/register/login.page";
import NotFoundPage from "./pages/notFound.page";
import ProductDetails from "./pages/productDetails.page";
import ProductUpdate from "./pages/productUpdate.page";
import CartAdd from "./pages/cart/cartAdd.page";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/registration" element={<RegistrationPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/products/update/:id" element={<ProductUpdate />} />
        <Route path="/cart" element={<CartAdd />} /> 
        
        {/* <Route path="/user/create" element={<UserCreatePage />} />
        <Route path="/user/edit" element={<UserCreatePage />} /> */}
        <Route path="*" element={<NotFoundPage />} />
    
      </Routes>
    </>
  );
}

export default App;