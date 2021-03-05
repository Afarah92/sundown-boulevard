import React from 'react';
import { useEffect, useState } from 'react';
import '../Home/findOrder.css';
import { Switch, Route, BrowserRouter as Router, Link } from 'react-router-dom';



  function FindOrder() {

    const [inputEmail, setInputEmail] = useState("");

   
  
    return (
    <div className="find-order">
      <h2>Find your order</h2>
      <p> If you've previously added an order, write your email below and we'll find it for you</p>
    <div className="user-email">
    <input name="email" type="email" defaultValue={inputEmail} onChange={e => setInputEmail(e.target.value)} />

    <Link to={{ path:'/dish'}}> 
       <button className="btn" > Find</button>
        </Link>
    </div>


    

    </div>)
  }
  export default FindOrder;


  



