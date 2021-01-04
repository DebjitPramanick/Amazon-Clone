import React, {useEffect} from 'react'
import "../styles/SearchResults.css"
import { useSelector , useDispatch} from 'react-redux'
import Product from '../components/Product'
import LoadingBox from "../components/LoadingBox"
import MessageBox from "../components/MessageBox"
import { listProducts } from '../actions/ProdcutActions'


const SearchResults = (props) => {

    const query = props.match.params.query;
    console.log(query);

    const dispatch = useDispatch();

    const productList = useSelector( state => state.productList);
    const {loading,error,products} = productList;


    useEffect(() => {
        dispatch(listProducts());
    }, [dispatch])

    console.log(products);
    
    
    /*const filterProducts = products.filter((product)=>{
        return product.name.toLowerCase().includes(query.toLowerCase());
    });*/

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
                    {products.map((product)=>(
                            product.name.toLowerCase().includes(query.toLowerCase()) && (
                                <Product key={product._id} product={product} /> 
                            )
                        ))
                    }
                </div>
                </>
            )
            }

        </div>
    )
}

export default SearchResults
