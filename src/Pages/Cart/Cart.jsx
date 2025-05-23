import React, { useContext } from 'react'
import Layout from '../../components/Layout/Layout';
import { DataContext } from '../../components/DataProvider/DataProvider';
import ProductCard from "../../components/Product/ProductCard"
import CurrencyFormat from '../../components/CurrencyFormat/CurrencyFormat';
import { Link } from 'react-router-dom';
import styles from "./cart.module.css"
const Cart = () => {
  const [{basket,user},dispatch]=useContext(DataContext)
  
  const total=basket.reduce((amount,item)=>{
        return item.price +amount
},0)
  return (
    <div>
        <Layout>

    <section className={styles.container}>
      <div className={styles.cartContainer}>
        <h2>Hello</h2>
        <h3> Your shopping basket</h3>
        <hr />
        {
          basket?.length==0 ? (<p>Opps ! No item in your cart</p>):(basket?.map((item,i)=>{
           return  <ProductCard
           key={i}
           product={item}
           renderDesc={true}
           flex={true}
           renderAdd={false}
           />
          })
        )
        }
      </div>

      
        {basket?.length !==0&& (

<div className={styles.subtotal}>
  <div>
    <p>
      Subtotal ({basket?.length} items )
    </p>
    <CurrencyFormat amount={total}/>
  </div>
<span>
  <input type="checkbox" />
  <small>This order contains a gift</small>
</span>
<Link to="/payments">
Continue to checkout
</Link>
   </div>    

        )}
    
    </section>
        </Layout>
    </div>
  )
}

export default Cart
