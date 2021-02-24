import React from 'react';
import '../Receipt/receipt.css';
import { Switch, Link, Route, BrowserRouter as Router } from 'react-router-dom';



const  Receipt = ()  => {
    return (
        <div className="container">
             <div className="receipt-container">
    <div className="custom-card">
      <h2>Your Order</h2>
      <ul className="receipt-details">
        <li> <span>Your Email:</span></li>
        <li> <span>Date and Time:</span> </li>
        <li> <span>Number of Guests:</span> </li>
        <li> <span>Dish:</span> </li>
        <li> <span>Drinks:</span> 
         
        </li>
      </ul>
   
    </div>
  </div>
  <div>
      <Link to="/">
      <button className="back">Back to Homepage</button>
      </Link>
  </div>
          

            
            
        </div>
    )
}

export default Receipt
