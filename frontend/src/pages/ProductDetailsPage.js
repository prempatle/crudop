import React from 'react';
import { useParams } from 'react-router-dom';

function ProductDetailsPage() {
  const { id } = useParams();
  const product = {
    id: id,
    name: `Product ${id}`,
    description: `Description of Product ${id}`,
    price: 100,
    category: `Category ${id}`,
  };

  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <p>Category: {product.category}</p>
    </div>
  );
}

export default ProductDetailsPage;
