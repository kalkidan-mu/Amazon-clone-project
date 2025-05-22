import React from 'react'
import Rating from "@mui/material/Rating"
import styles from "./product.module.css"
import CurrencyFormat from '../CurrencyFormat/CurrencyFormat';
import {Link} from "react-router-dom"
const ProductCard = ({product,flex,renderDesc}) => {
    const {image,title,id,rating,price,description}=product;
   
  return (
    <div className={`${styles.cardContainer} ${flex?styles.productFlexed:""}`}>
      <Link to={`/products/${id}`}>
        <img src={image} alt="" />
      </Link>
      <div>
        <h3>{title}</h3>
        {renderDesc && <div
        style={{maxWidth:"750px"}}
        >{description}</div>}
        {rating && (
        <div className={styles.rating}>
          {/* rating */}
          <Rating value={rating?.rate} precision={0.1}/>
          {/* count */}
          <small>{rating?.count}</small>
        </div>
        )}
        <div>{/* price */}
            <CurrencyFormat amount={price}/>
        </div>
        <button className={styles.toCartButton}>add to cart </button>
      </div>
    </div>
  );
}

export default ProductCard
