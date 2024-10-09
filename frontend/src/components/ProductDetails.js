import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/api/products/${id}`);
        setProduct(response.data);
      } catch (err) {
        setError('Error fetching product details.');
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="container">
      {product ? (
           
            <div className='row'>
              <div className='col-lg-6 mx-auto'>
                <div className='product-form text-center my-5'>
                  <h2 className='mb-3'>{product.name}</h2>
                  <p><strong>Description:</strong> {product.description}</p>
                  <p><strong>Price:</strong>{product.price.toFixed(2)}</p>
                  <p><strong>Category:</strong> {product.category}</p>
                  <Link to="/" className='btn btn-primary'>Back to Product List</Link>
                </div>
              </div>
           </div>
      ) : (
        <p>Product not found.</p>
      )}
    </div>
  );
};

export default ProductDetails;