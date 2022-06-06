import React, { useEffect, useState } from "react";
import axios from 'axios'
import Product from "./Product/Product";

const Products = () => {

  const [items, setItems] = useState([]);
  useEffect(() => {
    const fetchItems = async() => {
      let res = await axios.get("http://localhost:8080/products");
      setItems(res.data);
    };
    fetchItems();
  }, []);

  return <div>{/* Code here */}
    
    {items.map((el) => (
      <Product key={el.id} el={el}/>
    ))}
  </div>;
};

export default Products;
