import React from "react";
import { useNavigate } from "react-router-dom";
import "./checkout.scss";
import HomePage from "../HomePage";

const Checkout = () => {
    const navigate = useNavigate();

 
    const handlePayment = () =>{
        alert("Your payment is submmited")
    }
  return ( 
    <div className="mt-5">
        <button className=" btn btn-success shop-button" onClick={() => navigate('/')}>Shop More</button>
      <h2 className="border-bottom">checkout page</h2>
      <p >You can pay through <span className="text-success">Stripe payment</span> </p>
      <button className="btn btn-info" onClick={handlePayment}>pay</button>
      {/* <button className="btn btn-success">Stripe payment</button> */}
      {/* <div className="container mt-5">
        <div className="row">
          <ul className="list0-style">
            <div className="col border m-2">
            <li>
              First item
              <button className="btn btn-warning m-1">-</button>
              <button className="btn btn-primary m-1">+</button>
              <button className="btn btn-info m-1">Remove to Cart</button>
            </li>
            </div>
            <div className="col border m-2">
            <li>
              second item
              <button className="btn btn-warning m-1">-</button>
              <button className="btn btn-primary m-1">+</button>
              <button className="btn btn-info m-1">Remove to Cart</button>
            </li>
            </div>
            <div className="col border m-2">
            <li>
              third item
              <button className="btn btn-warning m-1">-</button>
              <button className="btn btn-primary m-1">+</button>
              <button className="btn btn-info m-1">Remove to Cart</button>
            </li>
            </div >
          </ul>
          <h4 className="text-primary">Total Payment: 0$</h4>
        </div>
      </div> */}
    </div>
  );
};

export default Checkout;
