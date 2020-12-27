import React, {useEffect} from 'react'
import { Link } from 'react-router-dom';
import {useSelector,useDispatch} from "react-redux"
import Rating from '../components/Rating';
import "../styles/ProductPage.css"
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { detailsProduct } from '../actions/ProdcutActions';

const ProductPage = (props) => {

    const dispatch = useDispatch();
    const productID = props.match.params.id;

    const productDetails = useSelector((state) => state.productDetails);
    const {loading,error,product} = productDetails;

    useEffect(() => {
        dispatch(detailsProduct(productID));
    }, [dispatch,productID]);

    return (

        <div>
            {loading ? <LoadingBox />
            :
            error ? <MessageBox variant="danger">{error}</MessageBox>
            :
            (
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

        </div>
        
    )

    
}

export default ProductPage
