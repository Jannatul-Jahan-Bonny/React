import React, { useState, useEffect } from 'react';
import axiosInstance from "../utils/axiosinstance";
import { Link } from "react-router-dom";
import Pagination from '../components/pagination'; // Import the Pagination component
import Sorting from '../components/sorting'; // Import the Sorting component
import Search from '../components/search';
import "./HomePage.css";


function Homepage() {
  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(50);
  const [sortField, setSortField] = useState('price');
  const [sortOrder, setSortOrder] = useState('asc');
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    fetchProducts();
  }, [page, limit, sortField, sortOrder, searchText]);

  const fetchProducts = async () => {
    try {
      const response = await axiosInstance.get(`/books/all?page=${page}&limit=${limit}&sortField=${sortField}&sortOrder=${sortOrder}&searchText=${searchText}`);
      setProducts(response.data.data);
      setTotal(response.data.total);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  const handleSortChange = (field, order) => {
    setSortField(field);
    setSortOrder(order);
  };

  const handleSearchChange = (newSearchText) => {
    setSearchText(newSearchText);
  };

  return (
    <div  className="container">
      <div className="header">
        <h1>Welcome to the Online Bookstore</h1>
      </div>
      <div className="navbar">
        <Link to="/" className="active">
          Home
        </Link>
        <Link to="/login">Login</Link>
        <Link to="/products">Products</Link>
        <Link to="/registration">Registration</Link>
      </div>
      <h1>Product List</h1>

      <Search searchText={searchText} onSearchChange={handleSearchChange} />
      <Sorting sortField={sortField} sortOrder={sortOrder} onSortChange={handleSortChange} />
      <ul>
      {Array.isArray(products) && products.length > 0 ? (
          products.map((product) => (
            <li key={product._id}>
              <p>{product}</p>
              <h5>Title: {product.title}</h5>
              <p>Price: {product.price}</p>
             </li>
          ))
          ) : (
           <li>No products available</li>
         )}
        </ul>

      <Pagination page={page} total={total} limit={limit} onPageChange={handlePageChange} />
    </div>
  );
}

export default Homepage;

