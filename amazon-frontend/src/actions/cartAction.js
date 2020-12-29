import axios from "../Axios"
import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "../constants/CartConstant";

export const addToCart = (productID,qty) => async(dispatch, getState) =>{
    const {data} = await axios.get(`/api/products/${productID}`);

    dispatch({
        type: CART_ADD_ITEM,
        payload:{
            name: data.name,
            image: data.image,
            price: data.price,
            stock: data.stock,
            product: data.id,
            qty,
        }
    })


    localStorage.setItem('cartItems',JSON.stringify(getState().cart.cartItems));
};


export const removeFromCart = (productID) => (dispatch,getState) =>{
    dispatch({
        type: CART_REMOVE_ITEM,
        payload: productID
    });
    localStorage.setItem("cartItems",JSON.stringify(getState().cart.cartItems));

}