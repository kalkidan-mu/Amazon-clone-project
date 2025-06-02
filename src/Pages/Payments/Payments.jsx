import  { useContext 
  ,useState
} from 'react'
import styles from "./payment.module.css"
import Layout from "../../components/Layout/Layout";
import { DataContext } from '../../components/DataProvider/DataProvider';
import ProductCard from "../../components/Product/ProductCard";
import {useStripe, useElements,CardElement} from "@stripe/react-stripe-js";
import CurrencyFormat from '../../components/CurrencyFormat/CurrencyFormat';
import { axiosInstance } from '../../Api/axios';
import { ClipLoader } from 'react-spinners';
import {db} from '../../Utility/firebase';
import { doc, setDoc } from "firebase/firestore";
import { useNavigate } from 'react-router-dom';


const Payments = () => {
  const [{user,basket}]=useContext(DataContext)

  const totalItem = basket.reduce((amount, item) => {
    return item.amount + amount;
  }, 0);

  const[cardError,setCardError]=useState(null)
const [processing,setProcessing]=useState(false)
const navigate=useNavigate()


  const stripe=useStripe()
  const elements=useElements()

  const total = basket.reduce((amount, item) => {
    return item.price * item.amount + amount;
  }, 0);
  const handleChange=(e)=>{
    e?.error?.message? setCardError(e?.error?.message):setCardError("")
  }

  const handlePayment=async(e)=>{
    e.preventDefault()
try {
  setProcessing(true)
// step 1 backend || functions ----> contact to the clinet secret
  const response = await axiosInstance({
    method: "POST",
    url: `/payment/create?total=${total *100}`,
  });
// console.log(response.data)
const clientSecret=response.data?.clientSecret

// step 2 client side(react side confirmation)
const {paymentIntent}= await stripe.confirmCardPayment(clientSecret,{payment_method:{
  card:elements.getElement(CardElement)
}})
// console.log(paymentIntent)

// step 3 after the confirmation => order firestoe database save, clear basket,redirect to orders page

await setDoc(doc(db, "users", user?.uid, "orders", paymentIntent.id), {
  basket: basket,
  amount: paymentIntent.amount,
  created: paymentIntent.created,
});
// await db.collection("users").doc(user?.uid).collection("orders").doc(paymentIntent.id).set({
//   basket:basket,
//   amount:paymentIntent.amount,
//   created:paymentIntent.created
// })

setProcessing(false);
navigate("/orders",{state:{msg:"you have placed new order!"}})
}catch (error){
console.log(error)
setProcessing(false);
}

    

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
              <form onSubmit={handlePayment} action="">
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

                    <button type='submit'>
                      {processing ? ( <div>
                        <ClipLoader color='gray' size={15} />
                        <span style={{marginRight:'10px'}}>
                          processing...
                        </span>
                      </div>
                        ):("Pay Now")
                      }
                      </button>
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
