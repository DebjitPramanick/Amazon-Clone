import React,{useEffect} from 'react'
import { useSelector , useDispatch} from 'react-redux'
import '../styles/ProductList.css'
import Product from './Product'
import LoadingBox from "./LoadingBox"
import MessageBox from "./MessageBox"
import { listProducts } from '../actions/ProdcutActions'

const ProductList = () => {

    const dispatch = useDispatch();

    const productList = useSelector( state => state.productList);
    const {loading,error,products} = productList;


    useEffect(() => {
        dispatch(listProducts());
    }, [dispatch])


    return (

        <div className="home-product-container">
            {loading ? <LoadingBox />
            :
            error ? <MessageBox variant="danger">{error}</MessageBox>
            :
            (
                <>
                <h2 className="sec-title">Products</h2>
                <div className="product-container">
                    {products.map((product)=>{
                        return(
                            <Product key={product._id} product={product}/> 
                        )
                        })
                    }
                </div>
                </>
            )
            }

        </div>
            
        
    )
}

export default ProductList
