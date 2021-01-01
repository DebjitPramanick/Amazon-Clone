import React from 'react'
import { useSelector } from 'react-redux'
import "../styles/PlaceOrder.css"
import CheckoutSteps from '../components/CheckoutSteps'
import { Link } from 'react-router-dom'

const PlaceOrder = (props) => {

    const cart = useSelector((state) => state.cart);

    if(!cart.paymentMethod) {
        props.history.push('/payment');
    }

    return (
        <div>
            <CheckoutSteps step1 step2 step3 step4></CheckoutSteps>

            <div className="row-container">
                <div className="col-6">
                    <ul>
                        <li>
                            <div className="card-body">
                                <h2>Shipping</h2>
                                <p>
                                    <strong>Name:</strong> {cart.shippingAddress.fullName} <br/>
                                    <strong>Address: </strong> {cart.shippingAddress.address},
                                    {cart.shippingAddress.city}, {cart.shippingAddress.postalcode},
                                    {cart.shippingAddress.country}
                                </p>
                            </div>
                        </li>

                        <li>
                            <div className="card-body">
                                <h2>Payment Method</h2>
                                <p>
                                    <strong>Method: </strong> {cart.paymentMethod} <br/>
                                </p>
                            </div>
                        </li>

                        <li>
                            <div className="card-body">
                                <h2>Order Items</h2>
                                <ul>
                                {
                                    cart.cartItems.map((item)=>(
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
                                                
                                                <p>{item.qty} x ${item.price} = ${item.price*item.qty}</p>
                                                
                                            </div>
                                        </li>
                                    ))
                                }
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>

                <div className="col-7">
                    
                </div>
            </div>
        </div>
    )
}

export default PlaceOrder
