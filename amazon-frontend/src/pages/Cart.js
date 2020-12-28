import React from 'react'

const Cart = (props) => {

    const productID = props.match.params.id;
    const qty = props.location.search ? 
        Number(props.location.search.split('=')[1])
        : 1;

    return (
        <div>
            This is cart.
            <p>
                Add to cart: Product ID: {productID} Quantity: {qty} 
            </p>
        </div>
    )
}

export default Cart
