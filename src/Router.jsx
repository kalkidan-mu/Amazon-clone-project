import React from 'react'
import {BrowserRouter as Router,Routes,Route}from 'react-router-dom'
import Landing from './Pages/Landing/Landing'
import SignUp from './Pages/Auth/SignUp'
import Payments from './Pages/Payments/Payments'
import Orders from './Pages/Orders/Orders'
import Cart from './Pages/Cart/Cart'
function Routering() {
  return (
  <Router>
    <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/auth' element={<SignUp/>}/>
        <Route path='/payments' element={<Payments/>}/>
        <Route path='/orders' element={<Orders/>}/>
        <Route path='/cart' element={<Cart/>}/> 
    </Routes>
  </Router>
  )
}

export default Routering
