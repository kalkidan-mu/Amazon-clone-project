import React from 'react'
import CarouselEffect from '../../components/Carousel/Carousel';
import Catagory from '../../components/Category/Category';
import Product from '../../components/Product/Product';
import Layout from '../../components/Layout/Layout';

const Landing = () => {
  return (
    <Layout>
      <CarouselEffect />
      <Catagory />
      {/* <MyCategory /> */}
      <Product />
    </Layout>
  );
}

export default Landing
