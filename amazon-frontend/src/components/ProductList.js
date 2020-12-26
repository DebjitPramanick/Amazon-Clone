import React,{useState,useEffect} from 'react'
import '../styles/ProductList.css'
import Product from './Product'
import axios from "../Axios"
import LoadingBox from "./LoadingBox"
import MessageBox from "./MessageBox"

const ProductList = () => {

    const [products,setProducts] = useState([]);
    const [loading,setLoading] = useState(false);
    const [error,setError] = useState(false);


    useEffect(() => {
        const fetchdata = async()=>{

            try{
                setLoading(true);
                const {data} = await axios.get("/api/products");
                setLoading(false);
                setProducts(data);
            }
            catch(err){
                setLoading(false);
                setError(err.message);
                
            }
            
        };
        fetchdata();
    }, [])

    console.log(products);


    return (

        <div>
            {loading ? <LoadingBox />
            :
            error ? <MessageBox variant="danger">{error}</MessageBox>
            :
            (
                <div className="product-container">
                    {products.map((product)=>{
                        return(
                            <Product key={product.id} product={product} /> 
                        )
                        })
                    }
                </div>
            )
            }

        </div>
            
        
    )
}

export default ProductList
