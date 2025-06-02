import React, { useContext, useEffect, useState } from 'react'
import Layout from "../../components/Layout/Layout";
import {db} from "../../Utility/firebase"
import { DataContext } from '../../components/DataProvider/DataProvider';
import styles from "./orders.module.css"
import {collection,getDocs, orderBy, query} from "firebase/firestore"
import ProductCard from '../../components/Product/ProductCard';

const Orders = () => {
const[{user},dispatch]=useContext(DataContext)

const [orders ,setOrders]=useState([])
useEffect(()=>{
if(user){
// getDoc(doc(db,"users",user?.uid,"orders",orderBy("created","desc").onSnapshot((snapshot)=>{
//   console.log(snapshot)
// })))

// db.collection("users").doc(user?.uid).collection("orders").orderBy("created","desc").onSnapshoot((snapshot)=>{
//   console.log(snapshot)
// })
getDocs(query(collection(db,"users",user?.uid,"orders"),orderBy("created","desc"))).then((snapshot)=>{
  // console.log(snapshot)
  setOrders(snapshot.docs.map((doc)=>({
    id:doc.id,
    data:doc.data()
  })))
}).catch((err)=>console.log(err.message))
}else{
setOrders([])
}
},[user])

  return (
        <Layout>
      <section className={styles.container}>
        <div className={styles.orderContainer}>
          <h2>Your Orders</h2>
          {
            orders?.length ===0 && <p style={{padding:"20px"}}>
              You Have No Orders Yet.
            </p>
          }
          {/* ordered items */}
          <div>
{
  orders?.map((eachOrder,i)=>{
    return (
      <div key={i}>
        <hr />
        <p>Order ID: {eachOrder?.id}</p>
        {eachOrder?.data?.basket?.map(order=>{
return <ProductCard
flex={true}
product={order}
key={order.id}
/>


        })}
      </div>
    )
  })
}
          </div>
        </div>
      </section>
        </Layout>
  )
}

export default Orders;
