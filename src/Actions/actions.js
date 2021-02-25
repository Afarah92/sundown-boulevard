import {
    GET_DISH ,
    GET_DISH_SELECTED,
    GET_DRINK,
    GET_DRINK_SELECTED,
    GET_EMAIL,
    GET_EMAIL_SELECTED,
    GET_DATE,
    GET_GUEST_AMOUNT
 } from './Types';


 export const getDrink = (drink) => {
    return {
      type: GET_DRINK,
      payload: drink,
    };
  };


  export const getDrinkSelected = (drink) => {
    return {
      type: GET_DRINK_SELECTED,
      payload: drink,
    };
  };


  export const getEmaill = (email) => {
    return {
      type: GET_EMAIL,
      payload: email,
    };
  };

  export const getDate = (date) => {
    return {
      type: GET_DATE,
      payload: date,
    };
  };


  export const getAmount = (guest) => {
    return {
      type: GET_GUEST_AMOUNT,
      payload: guest,
    };
  };


  export const getDish = (dish) => {
    return {
      type: GET_DISH,
      payload: dish,
    };
  };