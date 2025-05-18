import React from "react";
import style2 from "./style.module.css";
import { categoryData } from "./categoryData";
import MyCatagoryCard from "./MyCatagoryCard";
const MyCategory = () => {
  return (
    <section className={style2.container}>
      {categoryData.map((item, index) => (
        <MyCatagoryCard key={index} data={item} />
      ))}
    </section>
  );
};

export default MyCategory;
