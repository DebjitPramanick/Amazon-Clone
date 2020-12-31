import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import thunk from 'redux-thunk'
import { cartReducer } from './reducers/CartReducer';
import { prodcutDetailsReducer, prodcutListReducer } from './reducers/ProductReducer';
import { userSigninReducer } from './reducers/UserReducer';

const initialState = {
    cart:{
        cartItems: localStorage.getItem('cartItems')
         ? JSON.parse(localStorage.getItem('cartItems'))
         : [],
    }
};
const reducer = combineReducers({
    productList: prodcutListReducer,
    productDetails: prodcutDetailsReducer,
    cart: cartReducer,
    userSignin: userSigninReducer,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    reducer, 
    initialState,
    composeEnhancer(applyMiddleware(thunk)),
);

export default store;