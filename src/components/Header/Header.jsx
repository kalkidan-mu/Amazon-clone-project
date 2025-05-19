import React from 'react'
import classes from "./header.module.css"
import flag from "../../assets/flag.png"
import { BsSearch } from "react-icons/bs";
import { SlLocationPin } from "react-icons/sl";
import { BiCart } from "react-icons/bi";
import LowerHeader from './LowerHeader';
import {Link} from "react-router-dom"
const Header = () => {
  return (
    <>
      <section>
        <div className={classes.header_container}>
          <div className={classes.logo_container}>
            {/* logo */}
            <Link to="/">
              <img
                src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
                alt="amazon logo"
              />
            </Link>
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
            <Link to='' className={classes.language}>
              <img src={flag} alt="US flag" />
              {/* ing addrss https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg */}
              <select>
                <option value="">EN</option>
              </select>
            </Link>
            {/* three components */}
            <Link to="/auth">
                <p>Sign In</p>
                <span>Account & Lists</span>
            </Link>
            {/* orders */}
            <Link to="/orders">
              <p>returns</p>
              <span>& Orders</span>
            </Link>
            {/* cart */}
            <Link to={"/cart"} className={classes.cart}>
              <BiCart size={35}/>
              <span>0</span>
            </Link>
          </div>
        </div>
      </section>
      <LowerHeader/>
    </>
  );
}

export default Header
