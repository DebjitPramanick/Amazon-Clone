import React,{useState} from 'react'
import '../styles/ProductList.css'
import {data} from "../data"
import Product from './Product'

const ProductList = () => {

    const [products,setProducts] = useState(data);


    return (
        <div className="product-container">

            {products.map((product)=>{
                return(
                   <Product key={product.id} product={product} /> 
                )
                
            })}
            
        </div>
    )
}

export default ProductList
