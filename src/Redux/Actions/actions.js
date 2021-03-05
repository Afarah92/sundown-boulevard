import {
    SET_DISH ,
    SET_DRINK,
    SET_EMAIL,
    SET_GUEST_AMOUNT,
    SET_DATE


 } from "../Actions/Types.js";

 export const setDish = (dish) => {
  return {
    type: SET_DISH,
    payload: dish,
  };
};


 export const setDrink = (drink) => {
    return {
      type: SET_DRINK,
      payload: drink,
    };
  };



  export const setDate = (date) => {
    return {
      type: SET_DATE,
      payload: date,
    };
  };


  export const setEmail = (email) => {
    return {
      type: SET_EMAIL,
      payload: email,
    };
  };

 
  export const setAmount = (guest) => {
    return {
      type: SET_GUEST_AMOUNT,
      payload: guest,
    };
  };




  



