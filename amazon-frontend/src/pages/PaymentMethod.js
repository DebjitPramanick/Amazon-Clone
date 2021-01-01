import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { savePaymentMethod } from '../actions/CartAction';
import CheckoutSteps from '../components/CheckoutSteps'
import "../styles/PaymentMethod.css"

const PaymentMethod = (props) => {

    const cart = useSelector((state) => state.cart);
    const {shippingAddress} = cart;

    if(!shippingAddress.address) {
        props.history.push('/shipping');
    }

    const [method, setMethod] = useState('PayPal');
    const dispatch = useDispatch();

    const submitMethod = (e) => {
        e.preventDefault();

        dispatch(savePaymentMethod(method));
        props.history.push('/placeorder');
    } 

    return (
        <div>
            <CheckoutSteps step1 step2 step3/>

            <div className="pay-method-container">
                <form className="form" onSubmit={submitMethod}>
                    <div>
                        <h1>Payment Method</h1>
                    </div>

                    <div className="select-method-ip">
                        <input type="radio" id="paypal" value="PayPal"
                            name="paymentMethod" required checked
                            onChange = {(e) => setMethod(e.target.value)}>
                        </input>
                        <label htmlFor="paypal">
                            PayPal
                        </label>
                    </div>

                    <div className="select-method-ip">
                        <input type="radio" id="stripe" value="Stripe"
                            name="paymentMethod" required
                            onChange = {(e) => setMethod(e.target.value)}>
                        </input>
                        <label htmlFor="stripe">
                            Stripe
                        </label>
                    </div>

                    <div>
                        <label/>
                        <button className="submit-btn" type="submit">
                            Continue
                        </button>
                    </div>

                    
                </form>
            </div>
        </div>
    )
}

export default PaymentMethod
