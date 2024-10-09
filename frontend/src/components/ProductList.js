import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import "../App.css"
const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get('http://localhost:3000/api/products');
      setProducts(response.data);
    };
    fetchProducts();
  }, []);

  const deleteProduct = async (id) => {
    await axios.delete(`http://localhost:3000/api/products/${id}`);
    setProducts(products.filter(product => product._id !== id));
  };

  return (
    <div className="container">
      <div className='row'>
        <div className='col-lg-12'>
          <h2 className='text-center my-5'>Product Management</h2>
        </div>
        {products.map((product) => (
          <div className="col-lg-3 col-md-4 col-sm-6 col-6 mb-3" key={product._id}>
             <div className='product-box text-center h-100'>
              <h2>Name: {product.name}</h2>
              <h3>Price: {product.price}</h3>
              <h6>Category: {product.category}</h6>
              <p>Description: {product.description}</p>
              <div className="buttons">
                <Link to={`/edit-product/${product._id}`} className="btn btn-info btn-sm mr-1">Edit</Link>
                <button onClick={() => deleteProduct(product._id)} className="btn btn-danger btn-sm mx-2">Delete</button>
                <Link to={`/product-details/${product._id}`} className="btn btn-secondary btn-sm">View</Link>
              </div>
              </div>
          </div>
        ))}
        <div className='col-lg-3 col-md-4 col-sm-6 col-6 mb-3'>
          <div className='product-box h-100 add-btn'>
            <Link to='/add-product' className='btn btn-primary'>Add Product</Link>
          </div>
        </div>
    </div>
  </div>
  );
};

export default ProductList;