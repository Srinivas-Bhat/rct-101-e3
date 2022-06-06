import React, { createContext, useState } from "react";
import axios from 'axios'

export const CartContext = createContext();

export const CartProvider = ({ children }) => {

  const [cartCount, setCartCount] = useState([]);

// const saveCart = async(cartCount) => {
//   const res = axios.post("http://localhost:8080/products", cartCount);
//   setCartCount([...data, res.data]);
// }

  return <CartContext.Provider value={{cartCount, setCartCount}} >{children}</CartContext.Provider>;
};
