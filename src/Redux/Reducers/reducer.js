import {
    SET_DISH ,
    SET_DRINK,
    SET_EMAIL,
    SET_DATE,
    SET_GUEST_AMOUNT
 } from '../Actions/Types';


const intitalDate = new Date();



 const initialState = {
  order: {
   date:intitalDate,
    time: "16:00",
    guests: 1,
    email: "",
    dish: {
      idMeal: "",
      strMeal: "",
      strCategory: "",
      strMealThumb: "",
      strTags: "",

    },
    drinks: [],
  },
};

const orderReducer =  (state = initialState, action) => {

    switch (action.type) {
    case SET_DISH:
            return {
             ...state,
             order:action.payload

            };
            
            break;

   
                    
    case SET_DRINK:
        return {
          ...state,
          order:action.payload
                
        };
                            
    break;

   case SET_DATE:
     return {
       ...state,
       order:action.payload

     };
            
     break;

   case SET_EMAIL:
       return {
        ...state,
        order:action.payload
        
      };
                    
     break;

     case SET_GUEST_AMOUNT:
        return {
          ...state,
          guest:action.payload
        
          };
                            
          break;


    
     default:
     return state;
     
    }



  }



  export default orderReducer