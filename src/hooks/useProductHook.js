import axios from "axios";
import { useState, useEffect, useContext } from "react";
import axiosInstance from "../utils/axiosinstance";
import { ProductContext } from "../pages/products.page";
import { useParams } from "react-router";

const useProductHook = () => {
  const {id: productId} = useParams();
  const [productData, setProductData] = useState([]);
  const [loading, setLoading] = useState(false);
  

  const { fetchReload, setFetchReload } = useContext(ProductContext);

  useEffect(() => {
    console.log("Fetch API called");

    setLoading(true);
    axiosInstance
      .get(`/books/total`)
      .then((resp) => resp.data)
      .then((data) => {
        console.log("Data : ", data);
        setProductData(data.data.result);
        setLoading(false);

        return data;
      })
      .catch((err) => {
        return "Some error";
      })
      .finally(() => {
        setLoading(false);
        setFetchReload(true);
      });
  }, [fetchReload]);

  const createPost = (formData) => {
    setLoading(true);
    console.log("The form data ", formData);
    axiosInstance
      .post("/books/create", formData)
      .then((resp) => resp.data)
      .then((data) => {
        console.log("Successfully created", data);
        setFetchReload(true);
      })
      .finally(() => setLoading(false));
  };

  const handleDeleteProduct  = (productId) => {
    setLoading(true);
    axiosInstance
      .delete(`/books/delete?id=${productId}`)
      .then((resp) => {
        console.log(`Successfully deleted product with ID ${productId}`);
        setFetchReload(true);
      })
      .catch((err) => {
        console.error(`Error deleting product with ID ${productId}:`, err);
      })
      .finally(() => setLoading(false));
  };

  const AddtoCart  = (productId) => {
    setLoading(true);
    axiosInstance
      .post(`/cart/add`, productId)
      .then((resp) => {
        console.log(`Successfully added product with ID ${productId} into cart`);
        setFetchReload(true);
      })
      .catch((err) => {
        console.error(`Error adding product with ID ${productId}`, err);
      })
      .finally(() => setLoading(false));
  };

  
  


    return { productData, loading, setLoading, createPost, handleDeleteProduct, AddtoCart  };
};

export default useProductHook;