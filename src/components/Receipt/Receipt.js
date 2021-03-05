import React from 'react';
import '../Receipt/receipt.css';
import { Switch, Link, Route, BrowserRouter as Router } from 'react-router-dom';
import Dish from "../Dish/dish"
import { connect } from "react-redux";



const  Receipt = ()  => {
    return (
        <div className="container">
             <div className="receipt-container">
      <h2>Your Order</h2>
      <ul className="receipt-details">
        <li> <span>Your Email:</span></li> 
        <li> <span>Date and Time:</span> </li>
        <li> <span>Number of Guests:</span> </li>
        <li> <span>Dish:</span> </li> 
        {Dish.dish && (
    <div>{Dish.dish.strMeal} ({Dish.dish.strCategory})</div>)}
        <li> <span>Drinks:</span></li>
      
        </ul>
   
    
  </div>
  <div>
      <Link to="/">
      <button className="back">Back to Homepage</button>
      </Link>
  </div>
          

            
            
        </div>
    )
}

const mapStateToProps = (state) => ({
  order: state.order
});

export default connect(mapStateToProps, null)(Receipt)