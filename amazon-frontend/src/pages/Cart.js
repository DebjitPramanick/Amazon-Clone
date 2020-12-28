import React,{useEffect} from 'react'
import { useDispatch,useSelector } from 'react-redux';
import { addToCart } from '../actions/CartAction';

const Cart = (props) => {

    const productID = props.match.params.id;
    const qty = props.location.search ? 
        Number(props.location.search.split('=')[1])
        : 1;

    
    const cart = useSelector((state) => state.cart);

    const dispatch = useDispatch();

    useEffect(() => {
        if(productID){
            dispatch(addToCart(productID,qty));
        }
    }, [dispatch, productID, qty])

    return (
        <div>
            
        </div>
    )
}

export default Cart
