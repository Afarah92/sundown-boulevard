import {createStore, applyMiddleware, compose} from 'redux'
import  thunk from 'redux-thunk';
import rootReducer from '../Redux/Reducers/index';


const initialState = {};

const middleware = [thunk];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


export const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(...middleware))
  );


export default store;

