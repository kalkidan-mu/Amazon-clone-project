import React, { useContext, useState } from 'react'

import styles from "./auth.module.css"
import { Link,useNavigate  } from 'react-router-dom';
import { auth } from '../../Utility/firebase';
import { signInWithEmailAndPassword,createUserWithEmailAndPassword} from 'firebase/auth';
import {DataContext} from "../../components/DataProvider/DataProvider"
import { Type } from '../../Utility/action.type';
import { ClipLoader } from 'react-spinners';

const Auth = () => {
const [email,setEmail]=useState("")
const [password,setPassword]=useState("")
const [error,setError]=useState("")
const [loading,setLoading]=useState({
  signin:false,
  signup:false
})

const[{user},dispatch]=useContext(DataContext)
console.log(user)
const navigate=useNavigate()
const authHandler= async (e)=>{
e.preventDefault()
console.log(e.target.name)
if(e.target.name=='signin'){ 
  setLoading({...loading,signin:true})
    signInWithEmailAndPassword(auth,email,password).then((userInfo)=>{
    
      dispatch({
        type:Type.SET_USER,
        user:userInfo.user,
      })
      setLoading({ ...loading, signin: false });
      navigate("/")
    }).catch((err)=>{
   setError(err.message)
   setLoading({ ...loading, signin: false});
    })
}else{
  setLoading({ ...loading, signup: true });
createUserWithEmailAndPassword(auth,email,password).then((userInfo)=>{
  dispatch({
    type: Type.SET_USER,
    user: userInfo.user,
  });
  setLoading({ ...loading, signup: false });
  navigate("/");
}).catch((err)=>{
  setError(err.message);
  setLoading({ ...loading, signup: false});
})
}

}

// console.log(email,password)
  return (
    <section className={styles.login}>
      {/* logo */}
      <Link to={"/"}>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7j-5bxXj8478bgUt35gCMl-_oLzbeTBIlgg&s"
          alt="amazon logo"
        />
      </Link>
      <div className={styles.loginContainer}>
        <h1>Sign-in</h1>
        <form action="">
          <div>
            <label htmlFor="email">Email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              id="email"
            />
          </div>

          <div>
            <label htmlFor="password">Password</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              id="password"
            />
          </div>

          <button
            name="signin"
            type="submit"
            onClick={authHandler}
            className={styles.loginSigninButton}
          >
            {loading.signin ? <ClipLoader size={15} /> : "Sign in"}
          </button>
        </form>

        {/* aggrement */}
        <p>
          By signing-in you agree to the AMAZON FAKE CLONE Condition of use and
          sale. Please see our privacy notice, our cookies notice and our
          interest based Ads notice.
        </p>
        {/* create account btn */}
        <button
          name="signup"
          type="submit"
          onClick={authHandler}
          className={styles.loginSignupButton}
        >
          {loading.signup ? (
            <ClipLoader size={15} />
          ) : (
            "Create your Amazon Account"
          )}
        </button>
        {error && (
          <small style={{ paddingTop: "5px", color: "red" }}>{error}</small>
        )}
      </div>
    </section>
  );
}

export default Auth
