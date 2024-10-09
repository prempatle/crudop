import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const EditProduct = () => {
  const { id } = useParams(); // Get product ID from the route
  const { register, handleSubmit, formState: { errors }, setValue } = useForm();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);

  // Fetch product details for pre-filling the form
  useEffect(() => {
    axios.get(`http://localhost:3000/api/products/${id}`)
      .then(response => {
        const productData = response.data;
        setProduct(productData);
        setValue('name', productData.name);
        setValue('description', productData.description);
        setValue('price', productData.price);
        setValue('category', productData.category);
      })
      .catch(err => console.error(err));
  }, [id, setValue]);

  const onSubmit = (data) => {
    axios.put(`http://localhost:3000/api/products/${id}`, data) 
      .then(() => navigate('/'))
      .catch(err => console.error(err));
  };

  if (!product) return <div>Loading...</div>;

  return (
    <div className="container">
      <div className='row'>
        <div className='col-lg-8 mx-auto'>
          <h2 className='my-5'>Edit Product</h2>
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
              <button type="submit" className="btn btn-primary">Save Product</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProduct;
