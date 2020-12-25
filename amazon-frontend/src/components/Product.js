import React from 'react'
import Rating from './Rating'
import "../styles/Product.css"


const Product = ({product}) => {


    return (
        <div className="product-card">
            <div className="product-image">
                <img src= {product.image} alt=""/>
            </div>
            <h2>{product.name}</h2>
            <Rating rating={product.rating} numRev={product.numRev}/>
            <p>{product.price}</p>
        </div>
    )
}

export default Product
