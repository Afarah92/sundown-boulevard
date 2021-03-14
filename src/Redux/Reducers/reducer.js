import {
  SET_DISH,
  SET_DRINK,
  SET_DETAILS
} from '../Actions/Types';


const intitalDate = new Date();


const initialState = {
  date: intitalDate,
  time: "16:00",
  guests: 1,
  email: "",
  idMeal: "",
  strMeal: "",
  strCategory: "",
  strMealThumb: "",
  strTags: "",
  drinks: [],
};

const orderReducer = (state = initialState, action) => {

  switch (action.type) {
    case SET_DISH:

      return {
        ...state,
        ...action.payload
      };

    case SET_DRINK:
      return {
        ...state,
        drink: action.payload
      }


      case SET_DETAILS:
        const {
          date, amount, email
        } = action.payload;

        return {
          ...state,
          guests: amount,
            email: email,
            date: date,
        }



        default:
          return state;

  }



}



export default orderReducer