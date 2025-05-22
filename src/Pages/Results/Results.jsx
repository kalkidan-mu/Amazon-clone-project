import React, { useEffect, useState } from 'react'
import Layout from "../../components/Layout/Layout";
import { useParams } from 'react-router-dom';
import axisos from "axios"
import { productUrl } from '../../Api/endPoints';
import styles from "./results.module.css"
import ProductCard from '../../components/Product/ProductCard';
const Results = () => {
  const [results,setResults]=useState([])
  const {categoryName}=useParams()
useEffect(()=>{
  axisos.get(`${productUrl}/products/category/${categoryName}`)
  .then((res)=>{
    setResults(res.data)
  }).catch((err)=>{
    console.log(err)
  })

},[])



  return (
    <Layout>
<section>
  <h1 style={{padding:"30px"}}>Results</h1>
  <p style={{padding:"30px"}}>Category / {categoryName}</p>
  <hr />
  <div className={styles.productsContainer}>
{
  results?.map((product)=>(
    <ProductCard
    key={product.id}
    product={product}
    />
  ))
}

  </div>
</section>
    </Layout>
  )
}

export default Results
