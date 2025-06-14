import React, { useContext } from 'react'
import classes from "./header.module.css"
import flag from "../../assets/flag.png"
import { BsSearch } from "react-icons/bs";
import { SlLocationPin } from "react-icons/sl";
import { BiCart } from "react-icons/bi";
import LowerHeader from './LowerHeader';
import {Link} from "react-router-dom"
import { DataContext } from '../DataProvider/DataProvider';
import {auth} from "../../Utility/firebase"


const Header = () => {
 const[{user,basket},dispatch]= useContext(DataContext)
 const totalItem=basket.reduce((amount,item)=>{
  return item.amount +amount
 },0)
  return (
    <section className={classes.fixed}>
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
            <input type="text" />
            <BsSearch size={38} />
          </div>
          {/* other section*/}
          <div className={classes.order_container}>
            <Link to="" className={classes.language}>
              <img src={flag} alt="US flag" />
              {/* ing addrss https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg */}
              <select>
                <option value="">EN</option>
              </select>
            </Link>
            {/* three components */}
            <Link to={!user && "/auth"}>
              <div>
                {user ? (
                  <>
                    <p>Hello {user?.email?.split("@")[0]} </p>
                    <span onClick={()=>auth.signOut()}>Sign Out</span>
                  </>
                ) : (
                  <>
                    <p>Sign In</p>
                    <span>"Account & Lists"</span>
                  </>
                )}
              </div>
            </Link>
            {/* orders */}
            <Link to="/orders">
              <p>returns</p>
              <span>& Orders</span>
            </Link>
            {/* cart */}
            <Link to={"/cart"} className={classes.cart}>
              <BiCart size={35} />
              <span>{totalItem}</span>
            </Link>
          </div>
        </div>
      </section>
      <LowerHeader />
    </section>
  );
}

export default Header
