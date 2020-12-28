import { CART_ADD_ITEM } from "../constants/CartConstant";

export const cartReducer = (state = {cartItems: []} ,action) => {
    switch(action.type){

        case CART_ADD_ITEM:
            const item = action.payload;
            const existitem = state.cartItems.find((x)=> x.product == item.product);
            if(existitem){
                return{
                    ...state,
                    cartItems: state.cartItems.map( x => x.product == existitem.product
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
        
        default:
            return state;

        
    }
}