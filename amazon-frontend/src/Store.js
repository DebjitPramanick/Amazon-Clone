import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import thunk from 'redux-thunk'
import { cartReducer } from './reducers/CartReducer';
import { orderCreateReducer, orderDetailsReducer } from './reducers/OrderReducer';
import { prodcutDetailsReducer, prodcutListReducer } from './reducers/ProductReducer';
import { userRegisterReducer, userSigninReducer } from './reducers/UserReducer';

const initialState = {
    cart:{
        cartItems: localStorage.getItem('cartItems')
         ? JSON.parse(localStorage.getItem('cartItems'))
         : [],
        shippingAddress: localStorage.getItem('shippingAddress')
         ? JSON.parse(localStorage.getItem('shippingAddress'))
         : {},
        paymentMethod: 'PayPal',
    },
    userSignin:{
        userInfo: localStorage.getItem('userInfo')
         ? JSON.parse(localStorage.getItem('userInfo'))
         : null,
    }
};
const reducer = combineReducers({
    productList: prodcutListReducer,
    productDetails: prodcutDetailsReducer,
    cart: cartReducer,
    userRegister: userRegisterReducer,
    userSignin: userSigninReducer,
    orderCreate: orderCreateReducer,
    orderDetails: orderDetailsReducer
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    reducer, 
    initialState,
    composeEnhancer(applyMiddleware(thunk)),
);

export default store;