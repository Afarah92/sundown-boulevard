import React from 'react';
import '../Home/orderBox.css';
import { Switch, Link, Route, BrowserRouter as Router } from 'react-router-dom';
import Dish from '../Dish/dish'







function OrderBox() {


 
    return (
     
        <div className="order-box">
          <div className="box-content">
          <h2>Order flow box</h2>
      


<Route>
  <Switch>
  <Link to="/dish" >
 <button className="btn"> Order</button>
   </Link>


  </Switch>
</Route>
         
        
          
         
    




            
          </div>
    
      
        
      
      </div>
      
    )
}

export default OrderBox