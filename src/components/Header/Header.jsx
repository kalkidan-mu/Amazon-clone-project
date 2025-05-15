import React from 'react'
import classes from "./header.module.css"
import flag from "../../assets/flag.png"
import { BsSearch } from "react-icons/bs";
import { SlLocationPin } from "react-icons/sl";
import { BiCart } from "react-icons/bi";
import LowerHeader from './LowerHeader';
const Header = () => {
  return (
    <>
      <section>
        <div className={classes.header_container}>
          <div className={classes.logo_container}>
            {/* logo */}
            <a href="/">
              <img
                src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
                alt="amazon logo"
              />
            </a>
            {/* delivery */}
            <div className={classes.delivery}>
              <span>
                <SlLocationPin />
              </span>
              <div>
                <p>Delivered to </p>
                <span>USA</span>
              </div>
            </div>
          </div>

            {/* search*/}
          <div className={classes.search}>
            <select name="" id="">
              <option value="">All</option>
            </select>
            <input type="text"/>
            <BsSearch size={25} />
          </div>
          {/* other section*/}
          <div className={classes.order_container}>
            <a href='' className={classes.language}>
              <img src={flag} alt="US flag" />
              {/* ing addrss https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg */}
              <select>
                <option value="">EN</option>
              </select>
            </a>
            {/* three components */}
            <a href="">
                <p>Sign In</p>
                <span>Account & Lists</span>
            </a>
            {/* orders */}
            <a href="">
              <p>returns</p>
              <span>& Orders</span>
            </a>
            {/* cart */}
            <a to={"/cart"} className={classes.cart}>
              <BiCart size={35}/>
              <span>0</span>
            </a>
          </div>
        </div>
      </section>
      <LowerHeader/>
    </>
  );
}

export default Header
