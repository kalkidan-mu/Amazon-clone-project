import React, { useEffect, useState } from 'react'
import Layout from '../../components/Layout/Layout';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { productUrl } from '../../Api/endPoints';
import ProductCard from '../../components/Product/ProductCard';
const ProductDetail = () => {
  const {productId}=useParams()
  const[product,setProduct]=useState({})

  useEffect(()=>{
axios.get(`${productUrl}/products/${productId}`)
.then((res)=>{
setProduct(res.data)
}).catch((err)=>{
  console.log(err)
})
  },[])
  return (
    <Layout>
   <ProductCard
   product={product}/>
    </Layout>
  )
}

export default ProductDetail
