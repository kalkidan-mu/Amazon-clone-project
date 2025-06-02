import React from 'react'
import {BrowserRouter as Router,Routes,Route}from 'react-router-dom'
import Landing from './Pages/Landing/Landing'
import Payments from './Pages/Payments/Payments'
import Orders from './Pages/Orders/Orders'
import Cart from './Pages/Cart/Cart'
import Results from './Pages/Results/Results'
import ProductDetail from './Pages/ProductDetail/ProductDetail'
import Auth from './Pages/Auth/Auth'
import { loadStripe } from "@stripe/stripe-js";
import {Elements} from "@stripe/react-stripe-js";
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'

const stripePromise = loadStripe(
  "pk_test_51RUwuV2eG5C00qTG02XT6G3SdDmNAgoS21n33DxZYnsF0a1li92TLcsShfvJt1ehj9oqQJOPPuywizjMlgKPEMtr005R6u1QKi"
);


function Routering() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/auth" element={<Auth />} />
        <Route
          path="/payments"
          element={
            <ProtectedRoute
              msg={"You Must Login To Pay!"}
              redirect={"/payments"}
            >
              <Elements stripe={stripePromise}>
                <Payments />
              </Elements>
            </ProtectedRoute>
          }
        />
        <Route
          path="/orders"
          element={
            <ProtectedRoute
              msg={"You Must Login To See Your Orders!"}
              redirect={"/orders"}
            >
              <Orders />
            </ProtectedRoute>
          }
        />
        <Route path="/category/:categoryName" element={<Results />} />
        <Route path="/products/:productId" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
}

export default Routering
