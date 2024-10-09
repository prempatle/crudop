import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AddProduct = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [submitError, setSubmitError] = useState(null);
  const [sucessMsg, setSucessMsg] = useState(null);

  const onSubmit = (data) => {
    setLoading(true);
    setSubmitError(null);
    setSucessMsg(null);
    console.log('Submitting data:', data); // Debugging log

    axios.post('http://localhost:3000/api/products', data)
      .then(response => {
        setLoading(false);
        console.log('Product added successfully:', response.data); // Debugging log
        setSucessMsg('Product added successfully');
        navigate('/'); // Redirect to product list
      })
      .catch(err => {
        setLoading(false);
        setSubmitError('Failed to add product. Please try again.');
        console.error('Error adding product:', err); // Debugging log
      });
  };

  return (
    <div className="container">
      <div className='row'>
        <div className='col-lg-8 mx-auto'>
        <h2>Add Product Data</h2>
          {submitError && <div className="alert alert-danger">{submitError}</div>}
          {sucessMsg && <div className="alert alert-success">{sucessMsg}</div>}
          <div className='product-form'>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-group">
                <label>Product Name</label>
                <input className="form-control" {...register('name', { required: true })} />
                {errors.name && <span className="text-danger">This field is required</span>}
              </div>
              <div className="form-group">
                <label>Description</label>
                <input className="form-control" {...register('description', { required: true })} />
                {errors.description && <span className="text-danger">This field is required</span>}
              </div>
              <div className="form-group">
                <label>Price</label>
                <input className="form-control" type="number" {...register('price', { required: true })} />
                {errors.price && <span className="text-danger">This field is required</span>}
              </div>
              <div className="form-group">
                <label>Category</label>
                <input className="form-control" {...register('category', { required: true })} />
                {errors.category && <span className="text-danger">This field is required</span>}
              </div>
              <button type="submit" className="btn btn-primary" disabled={loading}>
                {loading ? 'Adding...' : 'Add Product'}
              </button>
            </form>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default AddProduct;
