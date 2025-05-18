import { useState } from "react";

import "./App.css";
import Header from "./components/Header/Header";
import CarouselEffect from "./components/Carousel/Carousel";
import Catagory from "./components/Category/Category";
import MyCategory from "./components/Category/mine/MyCategory";
import Product from "./components/Product/Product";

function App() {
  return (
    <>
      <Header />
      <CarouselEffect />
      <Catagory/>
      {/* <MyCategory /> */}
      <Product/>
    </>
  );
}

export default App;
