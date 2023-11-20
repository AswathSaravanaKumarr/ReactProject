import React from 'react';

// Higher-Order Function (HOF) to create a product list component
const withProductList = (WrappedComponent, productList) => {
  return () => {
    return <WrappedComponent productList={productList} />;
  };
};

// Reusable ProductListComponent
const ProductListComponent = ({ productList }) => (
  <div>
    <h2>Product List</h2>
    <ul>
      {productList.map(product => (
        <li key={product.id}>
          <img src={product.imageUrl} alt={product.name} />
<p>${product.price}</p>
        </li>
      ))}
    </ul>
  </div>
);
