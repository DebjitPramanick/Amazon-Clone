import React, {useEffect, useState} from 'react'
import "../styles/SearchResults.css"
import { useSelector , useDispatch} from 'react-redux'
import Product from '../components/Product'
import LoadingBox from "../components/LoadingBox"
import MessageBox from "../components/MessageBox"
import { listProducts } from '../actions/ProdcutActions'
import PriceCheckBox from '../components/PriceCheckBox'
import {prices} from "../data/priceRanges";


const SearchResults = (props) => {

    const query = props.match.params.query;

    const dispatch = useDispatch();

    const productList = useSelector( state => state.productList);
    const {loading,error,products} = productList;


     const [Filters, setFilters] = useState({
        price: []
    })

    useEffect(() => {
        dispatch(listProducts());
    }, [dispatch])


    const handlePrice = (value) => {
        const data = prices;
        let array = [];

        for (let key in data) {

            if (data[key].id === parseInt(value, 10)) {
                array = data[key].array;
            }
        }
        console.log('array', array);
        return array;
    }

    const handleFilters = (filters, category) => {
        if(category === "pricerange"){
            let priceValues = handlePrice(filters);
        }
    }


    return (
        <div className="search-page-container">

            <div className="filter-options-container">
                <h3>
                    Filter according to price range:
                </h3>

                <PriceCheckBox
                list={prices}
                handleFilters = {filters => handleFilters(filters, "pricerange")}
                />
                
            </div>

            <div className="search-page-product-container">
                {loading ? <LoadingBox />
                :
                error ? <MessageBox variant="danger">{error}</MessageBox>
                :
                (
                    <>
                    <h2 className="sec-title">Search results for "{query}"</h2>
                    <div className="search-product-container">
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
        </div>
    )
}

export default SearchResults
