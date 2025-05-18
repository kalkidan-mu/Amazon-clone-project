import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";
import styles from "./product.module.css";
const Product = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) =>{ setProducts(res.data)
         console.log(res.data)})
      .catch((err) => console.log(err.message));
  }, []);
  return (
    <section className={styles.productsContainer}>
      {products.map((singleProduct) => {
        return <ProductCard product={singleProduct} key={singleProduct.id} />
        
})}
    </section>
  );
};

export default Product;
