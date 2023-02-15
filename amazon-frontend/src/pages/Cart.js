import React,{useEffect} from 'react'
import { useDispatch,useSelector } from 'react-redux';
import { addToCart,removeFromCart } from '../actions/CartAction';
import { Link } from 'react-router-dom';
import MessageBox from "../components/MessageBox";
import "../styles/Cart.css"
import CancelIcon from '@material-ui/icons/Cancel';

const Cart = (props) => {

    const productID = props.match.params.id;
    const qty = props.location.search ? 
        Number(props.location.search.split('=')[1])
        : 1;

    
    const cart = useSelector((state) => state.cart);
    const { cartItems, error } = cart;

    console.log(productID);

    const dispatch = useDispatch();

    useEffect(() => {
        if(productID){
            dispatch(addToCart(productID,qty));
        }
    }, [dispatch, productID, qty])


    const removeProduct = (id) =>{
        dispatch(removeFromCart(id));
    }

    const checkOut =() =>{
        props.history.push('/shipping');
    }

    return (
        <div>
            <Link to="/" className="back-res">Back to home</Link>

            <div className="row-container">
                <div className="col-4">
                    <h1>Shopping Cart</h1>
                    {cartItems.length === 0 ? (
                        <MessageBox>
                            Cart is empty. <Link to="/">Go Shopping</Link>
                        </MessageBox>
                    ) : (
                        <ul>
                            {
                                cartItems.map((item)=>(
                                    <li key={item.product}>
                                        <div className="row1">
                                            <div className="small">
                                                <img src={item.image}
                                                alt= ""
                                                ></img>
                                            </div>

                                            <div className="min-30">
                                                <Link to={`/products/product/${item.product}`}>{item.name}</Link>
                                            </div>
                                            <div className="qty-select">
                                                <select value={item.qty} 
                                                onChange={(e) => 
                                                dispatch(addToCart(item.product,Number(e.target.value)))
                                                }>
                                                {
                                                    [...Array(item.stock).keys()].map((x)=>(
                                                        <option value={x+1}>{x+1}</option>
                                                    ))
                                                }
                                                </select>
                                            </div>
                                            <p>${item.price * item.qty}</p>
                                            <div className="remove-btn">
                                                <button type="button" onClick={() => removeProduct(item.product)}>
                                                    <CancelIcon/>
                                                </button>
                                            </div>
                                        </div>
                                    </li>
                                ))
                            }
                        </ul>
                    )}
                </div>

                <div className="col-5">
                    <div className="card card-body">
                        <ul>
                            <li>
                                <p>
                                    Subtotal ({cartItems.reduce((a, c) => {
                                        return a + c.qty;
                                    }, 0)} items) : 
                                </p>
                                <p className="price">$ {cartItems.reduce((a, c) => a + c.price * c.qty, 0)}</p>
                            </li>
                            <li>
                                <button type="button" onClick={checkOut}
                                className="checkout-btn"
                                disabled={cartItems.length === 0}
                                >
                                    Proceed to Checkout
                                </button>
                            </li>
                        </ul>

                    </div>
                </div>
            </div>

        </div>
        
    )
}

export default Cart
