import React from 'react';
import '../Home/findOrder.css';


function Order () {
    if (localStorage.getItem('email') !== 'test@dk') {
        console.log(`Found your order`);
        alert("Found your order ")

    } else {
        console.log(`Could'nt not find order`);
        alert("could not find order ")
    }
    
    };
    
    
    


function FindOrder() {
    return (
    
<div className="find-order">
    <h2>Find your order</h2>
    <p> If you've previously added an order, write your email below and we'll
          find it for you</p>
    
    <div className="user-email">
      <input type="email"  required placeholder="Enter your email" />
      <button className="btn" onClick={Order}>Find</button>
    </div>
                
        </div>
    )
}

export default FindOrder