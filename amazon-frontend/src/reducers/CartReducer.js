import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "../constants/CartConstant";

export const cartReducer = (state = {cartItems: []} ,action) => {
    switch(action.type){

        case CART_ADD_ITEM:
            const item = action.payload;
            const existitem = state.cartItems.find((x)=> x.product === item.product);
            if(existitem){
                return{
                    ...state,
                    cartItems: state.cartItems.map((x) => x.product === existitem.product
                        ? item
                        : x)
                }
            }
            else{
                return{
                    ...state,
                    cartItems: [...state.cartItems, item]
                }
            }

        case CART_REMOVE_ITEM:
            return{...state, 
            cartItems: state.cartItems.filter((x)=>x.product != action.payload),
            };
        
        default:
            return state;

        
    }
}