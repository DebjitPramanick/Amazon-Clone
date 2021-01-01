import { CART_ADD_ITEM, CART_EMPTY, CART_REMOVE_ITEM, CART_SAVE_PAYMENT_METHOD, CART_SAVE_SHIPPING_ADDRESS } from "../constants/CartConstant";

export const cartReducer = (state = {cartItems: []} ,action) => {
    switch(action.type){

        case CART_ADD_ITEM:
            const item = action.payload;
            const existitem = state.cartItems.find((x)=> x.product === item.product);
            if(existitem){
                return {
                    ...state,
                    cartItems: state.cartItems.map((x) => x.product === existitem.product
                        ? item
                        : x)
                }
            }
            else{
                return {
                    ...state,
                    cartItems: [...state.cartItems, item]
                }
            }

        case CART_REMOVE_ITEM:
            return {...state, 
            cartItems: state.cartItems.filter((x)=>x.product != action.payload),
            };

        case CART_SAVE_SHIPPING_ADDRESS:
            return {
                ...state,
                shippingAddress: action.payload
            };

        case CART_SAVE_PAYMENT_METHOD:
            return {
                ...state,
                paymentMethod : action.payload
            }
        
        case CART_EMPTY:
            return {
                ...state,
                cartItems: []
            }
        
        default:
            return state;

        
    }
}