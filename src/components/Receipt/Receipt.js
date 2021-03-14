import React from 'react';
import '../Receipt/receipt.css';
import {
  Link,
} from 'react-router-dom';
import {
  connect
} from "react-redux";

const Receipt = props => {
  const {
    email,
    guests,
    date,
    title,
    drinks
  } = props.order;

  return ( <
      div className = "container" >
      <
      div className = "receipt-container" >
      <
      h2 > Your Order < /h2> <
      ul className = "receipt-details" >
      <
      li > < span > Your Email: < /span><strong>{email}</strong > < /li> <
      li > < span > Date and Time: < /span><strong>{guests}</strong > < /li> <
      li > < span > Number of Guests: < /span><strong>{guests}</strong > < /li> <
      li > < span > Dish: < /span><strong>{title}</strong > < /li> {
      drinks.length > 0 && ( <
        li > < span > Drinks: < /span><strong>{drinks.map(item => item + ', ')}</strong > < /li>
      )
    } <
    /ul> < /
    div > <
    div >
    <
    Link to = "/" >
    <
    button className = "back" > Back to Homepage < /button> < /
    Link > <
    /div>




    <
    /div>
)
}

const mapStateToProps = ({
  order
}) => ({
  order
});

export default connect(mapStateToProps, null)(Receipt)