import React,{useState,useEffect} from 'react'
import '../styles/ProductList.css'
import Product from './Product'
import axios from "../Axios"

const ProductList = () => {

    const [products,setProducts] = useState([]);

    useEffect(() => {
        const fetchdata = async()=>{
            const {data} = await axios.get("/api/products");
            setProducts(data);
        };
        fetchdata();
    }, [])

    console.log(products);


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
