import React from 'react'
import { Link } from 'react-router-dom';
import {data} from "../data"
import Rating from './Rating';
import "../styles/ProductPage.css"

const ProductPage = (props) => {

    const product = data.find((x) => x.id == props.match.params.id);

    return (
        <div>
            <Link to="/" className="back-res">Back to result</Link>
            <div className="row">
                <div className="col-1">
                    <img className= "large" src={product.image} alt=""/>
                </div>
                <div className="col-2">
                    <ul>
                        <li className="pd-name">{product.name}</li>
                        <li className="pd-rating">
                            <Rating rating={product.rating}
                            numRev={product.numRev} />
                        </li>
                        <li className="pd-price">{product.price}</li>
                        <li className="pd-desc">
                            Description :
                            <p>{product.desc}</p>
                        </li>
                    </ul>
                </div>
                <div className="col-3">
                    <div className="card card-body">
                        <ul>
                            <li>
                                <p>Price</p>
                                <div className="price">{product.price}</div>
                            </li>
                            <li>
                                <p>Stock</p>
                                { product.stock > 10
                                ? (<span className="success">In stock</span>)
                                : product.stock < 10 && product.stock > 0
                                ? (<span className="m-success">Hurry! Few in stock</span>)
                                : (<span className="error">Out of stock</span>)
                                }
                            </li>
                            <li>
                                <button>Add to cart</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductPage
