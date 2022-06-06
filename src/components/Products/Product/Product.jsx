import React, { useContext, useState } from "react";
import { CartContext } from "../../../context/CartContext";



const Product = ({el}) => {
  // Note: this id should come from api
  const [count, setCount] = useState(0) 
  const {cartCount, setCartCount} = useContext(CartContext);
  const handleAdd = () => {
    
  }
  const product = { id: 1 };
  return (
    <div data-cy={`product-${product.id}`}>
      <h3 data-cy="product-name">{el.name}</h3>
      <h6 data-cy="product-description">{el.description}</h6>
      <button data-cy="product-add-item-to-cart-button" onClick={handleAdd}>add</button>
      <div>
        <button data-cy="product-increment-cart-item-count-button" onClick={() => setCount(count+1)}>+</button>
        <span data-cy="product-count">
          {
            // Count here from CartItems
          }
          {count}
          
        </span>
        <button data-cy="product-decrement-cart-item-count-button" onClick={() => setCount(count-1)}>-</button>
        <button data-cy="product-remove-cart-item-button">remove</button>
      </div>
    </div>
  );
};

export default Product;
