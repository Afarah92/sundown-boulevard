import React, {
  Fragment
} from 'react';
import '../Home/orderBox.css';
import {
  Switch,
  Link,
  Route,
  BrowserRouter as Router
} from 'react-router-dom';
import Dish from '../Dish'

const OrderBox = () => {

  return (


    <
    div className = "order-box" >
    <
    div className = "box-content" >
    <
    h2 > Order flow box < /h2>

    <
    Link to = "/dish" >
    <
    button className = "btn" > Order < /button> <
    /Link>

    <
    /div>


    <
    /div>

  )
}

export default OrderBox