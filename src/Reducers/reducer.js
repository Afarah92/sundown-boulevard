import {
    GET_DISH ,
    GET_DISH_SELECTED,
    GET_DRINK,
    GET_DRINK_SELECTED,
    GET_EMAIL,
    GET_EMAIL_SELECTED,
    GET_DATE,
    GET_GUEST_AMOUNT
 } from '../Actions/Types';


 const intitalDate = new Date();


 const initialState = {
     dish: null,
     drink: [],
     email: null,
     Guest:1,
     date: intitalDate,


 }


  export default (state = initialState, action) => {

    switch (action.type) {
    case GET_DISH:
            return {

            };
            
            break;

    case GET_DISH_SELECTED:
           return {
        
         };
                    
         break;

    case GET_DRINK:
        return {
                
        };
                            
    break;

    case GET_DRINK_SELECTED:
            return {

            };
            
            break;


    case GET_DATE:
     return {

     };
            
     break;

   case GET_EMAIL:
       return {
        
      };
                    
     break;

     case GET_EMAIL_SELECTED:
            return {

            };
            
            break;


        

     case GET_GUEST_AMOUNT:
        return {
        
          };
                            
          break;


    
     default:
     break;
    }



  }

