import axios from "../Axios";
import { 
    PRODUCT_LIST_REQUEST, 
    PRODUCT_LIST_FAIL, 
    PRODUCT_LIST_SUCCESS,
    PRODUCT_DETAILS_REQUEST, 
    PRODUCT_DETAILS_FAIL, 
    PRODUCT_DETAILS_SUCCESS 

} from "../constants/ProductConstants";

export const listProducts = () => async (dispatch) =>{
    dispatch({
        type: PRODUCT_LIST_REQUEST 
    });

    try{
        const {data} = await axios.get("/api/products");
        const count = data.length;
        dispatch({
            type: PRODUCT_LIST_SUCCESS,
            payload: data
        })
    }
    catch(error){
        dispatch({
            type: PRODUCT_LIST_FAIL,
            payload: error.message
        })
    }
}



export const detailsProduct = (productID) => async (dispatch) =>{
    dispatch({
        type: PRODUCT_DETAILS_REQUEST,
        payload: productID
    });

    try{
        const {data} = await axios.get(`/api/products/${productID}`);
   
        dispatch({
            type: PRODUCT_DETAILS_SUCCESS,
            payload: data
        })
    }
    catch(error){
        dispatch({
            type: PRODUCT_DETAILS_FAIL,
            payload: error.response && error.response.data.mesaage
            ? error.response.data.message
            : error.message,
        });
    }
};