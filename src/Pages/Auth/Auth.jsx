import React from 'react'

import styles from "./auth.module.css"
import { Link } from 'react-router-dom';
const Auth = () => {
  return (
    <section className={styles.login}>
      {/* logo */}
      <Link>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7j-5bxXj8478bgUt35gCMl-_oLzbeTBIlgg&s"
          alt="amazon logo"
        />
      </Link>
      <div className={styles.loginContainer }>
        <h1>Sign-in</h1>
        <form action="">
          <div>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" />
          </div>

          <div>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
          </div>

          <button className={styles.loginSigninButton}>Sign in</button>
        </form>

        {/* aggrement */}
        <p>By signing-in you agree to the AMAZON FAKE CLONE Condition of use and sale. Please see our privacy notice, our cookies notice and our interest based Ads notice.</p>
        {/* create account btn */}
        <button className={styles.loginSignupButton}>Create your Amazon Account</button>
      </div>
    </section>
  );
}

export default Auth
