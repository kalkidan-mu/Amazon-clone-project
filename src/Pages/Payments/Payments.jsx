import  { useContext 
  ,useState
} from 'react'
import styles from "./payment.module.css"
import Layout from "../../components/Layout/Layout";
import { DataContext } from '../../components/DataProvider/DataProvider';
import ProductCard from "../../components/Product/ProductCard";
import {useStripe, useElements,CardElement} from "@stripe/react-stripe-js";
import CurrencyFormat from '../../components/CurrencyFormat/CurrencyFormat';
const Payments = () => {
  const [{user,basket}]=useContext(DataContext)
  const totalItem = basket.reduce((amount, item) => {
    return item.amount + amount;
  }, 0);
  const[cardError,setCardError]=useState(null)

  const stripe=useStripe()
  const elements=useElements()

  const total = basket.reduce((amount, item) => {
    return item.price * item.amount + amount;
  }, 0);
  const handleChange=async(e)=>{
    console.log(e)
    e?.error?.message? setCardError(e?.error?.message):setCardError("")
  }
  return (
    <Layout>
      {/* header */}
      <div className={styles.paymentHeader}>Checkout ({totalItem}) items</div>
      {/* payment method */}
      <section className={styles.payment}>
        {/* address */}
        <div className={styles.flex}>
          <h3>Delivery Address</h3>

          <div>
            <div>{user?.email}</div>
            <div>123 react lane</div>
            <div>washington ,blvd</div>
          </div>
        </div>
        <hr />
        {/* products */}
        <div className={styles.flex}>
          <h3>Review items and delivery</h3>

          <div>
            {basket.map((item) => (
              <ProductCard key={item.name} product={item} flex={true} />
            ))}
          </div>
        </div>
        <br />

        {/* card form */}

        <div className={styles.flex}>
          <h3>Payment methods</h3>
          <div className={styles.paymentCardContainer}>
            <div className={styles.paymentDetails}>
              <form action="">
                {/* error */}
                {cardError && (
                  <small style={{ color: "red" }}>{cardError}</small>
                )}
                {/* card element */}
                <CardElement onChange={handleChange} />

                {/* price */}
                <div className={styles.paymentPrice}>
                  <div>
                    <span style={{ display: "flex",gap:"10px",width:"100%"}}>
                      <p>Total Order |</p> <CurrencyFormat amount={total} />
                    </span>
                    <button>Pay Now</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Payments
