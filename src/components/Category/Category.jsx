import React from 'react'
import { categoryInfos } from "./categoryFullinfos";
import CategoryCard from './CategoryCard';
import styles from "./category.module.css";
const Catagory = () => {
  return (
    <section className={styles.categoryWrapper}>
      {
        categoryInfos.map((infos)=>{
            return <CategoryCard key={infos.name} data={infos}/>
        })
      }
    </section>
  )
}

export default Catagory
