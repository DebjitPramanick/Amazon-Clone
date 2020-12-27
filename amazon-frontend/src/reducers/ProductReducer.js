import { PRODUCT_LIST_FAIL, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS } from "../constants/ProductConstants";

export const prodcutListReducer = (state = {products: []} ,action) => {
    switch(action.type){

        case PRODUCT_LIST_REQUEST:
            return {loading: true};

        case PRODUCT_LIST_SUCCESS:
            return {loading: false, products: action.payload};

        case PRODUCT_LIST_FAIL:
            return {loading: true, error: action.payload};
        
        default:
            return state;

        
    }
}