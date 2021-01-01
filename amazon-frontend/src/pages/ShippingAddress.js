import React, { useState } from 'react'
import CheckoutSteps from '../components/CheckoutSteps'

const ShippingAddress = () => {

    const [fullName, setFullName] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [postalcode, setPostalCode] = useState('');
    const [country, setCountry] = useState('');

    const submitHandler = (e) =>{
        e.preventDefault();
    }

    return (
        <div>
            <CheckoutSteps step1 step2></CheckoutSteps>

            <form className="form" onSubmit={submitHandler}>
                <div>
                    <h1>Shipping Address</h1>
                </div>

                <div className="form-ip-sec">
                    <label htmlFor="fullName"></label>
                    <input type="text" id="fullName" placeholder="Enter full name"
                    value={fullName} onChange={(e) => setFullName(e.target.value)}
                    required>
                    </input>
                </div>

                <div className="form-ip-sec">
                    <label htmlFor="address"></label>
                    <input type="text" id="address" placeholder="Enter address"
                    value={address} onChange={(e) => setAddress(e.target.value)}
                    required>
                    </input>
                </div>

                <div className="form-ip-sec">
                    <label htmlFor="city"></label>
                    <input type="text" id="city" placeholder="Enter city"
                    value={city} onChange={(e) => setCity(e.target.value)}
                    required>
                    </input>
                </div>

                <div className="form-ip-sec">
                    <label htmlFor="postalcode"></label>
                    <input type="text" id="postalcode" placeholder="Enter postalcode"
                    value={postalcode} onChange={(e) => setPostalCode(e.target.value)}
                    required>
                    </input>
                </div>

                <div className="form-ip-sec">
                    <label htmlFor="country"></label>
                    <input type="text" id="country" placeholder="Enter country"
                    value={country} onChange={(e) => setCountry(e.target.value)}
                    required>
                    </input>
                </div>
            </form>

        </div>
    )
}

export default ShippingAddress
