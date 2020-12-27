import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import thunk from 'redux-thunk'
import { prodcutDetailsReducer, prodcutListReducer } from './reducers/ProductReducer';

const initialState = {};
const reducer = combineReducers({
    productList: prodcutListReducer,
    productDetails: prodcutDetailsReducer,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    reducer, 
    initialState,
    composeEnhancer(applyMiddleware(thunk)),
);

export default store;