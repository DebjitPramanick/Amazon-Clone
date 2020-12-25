import React from 'react'
import {data} from "../data"

const ProductPage = (props) => {

    const product = data.products.find((x) => x.id === props.match.params.id);

    return (
        (!product)
        ? <div>Product not found</div>
        : 
        <div>
            <div className="row">
                <div className="col-1">
                    <img src={product.image} alt=""/>
                </div>
                <div className="col-2">
                    Col1
                </div>
                <div className="col-3">
                    Col1
                </div>
            </div>
        </div>
    )
}

export default ProductPage
