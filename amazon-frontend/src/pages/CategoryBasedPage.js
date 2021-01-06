import React, {useEffect, useState} from 'react'
import "../styles/SearchResults.css"
import { useSelector , useDispatch} from 'react-redux'
import Product from '../components/Product'
import LoadingBox from "../components/LoadingBox"
import MessageBox from "../components/MessageBox"
import { listProducts } from '../actions/ProdcutActions'
import PriceCheckBox from '../components/PriceCheckBox'
import {prices} from "../data/priceRanges";


const CategoryBasedPage = (props) => {

    const [range, setRange] = useState([0,50000]);

    const category = props.match.params.cat;
    
    const dispatch = useDispatch();

    const productList = useSelector( state => state.productList);
    const {loading,error,products} = productList;


    useEffect(() => {
        dispatch(listProducts());
    }, [dispatch])



    const handleFilters = (filters) => {

        const data = prices;
        let array = [];

        for (let key in data) {
            if (data[key].id === parseInt(filters, 10)) {
                array = data[key].array;
            }
        }
        setRange(array);
    }



    return (
        <div className="search-page-container">

            <div className="filter-options-container">
                <button className="clear-filter-btn" onClick={() => setRange([0,50000])}>
                    Clear filters
                </button>
                <h3>
                    Filter Price:
                </h3>

                <PriceCheckBox
                list={prices}
                handleFilters = {filters => handleFilters(filters)}
                />
                
            </div>

            <div className="search-page-product-container">
                {loading ? <LoadingBox />
                :
                error ? <MessageBox variant="danger">{error}</MessageBox>
                :
                (
                    <>
                    <h2 className="sec-title">Products under <span>{category}</span> category</h2>
                    <div className="search-product-container">

                        {products.filter(product=>
                                product.category.toLowerCase().includes(category.toLowerCase())
                                && product.price <= range[1]
                                && product.price >= range[0]
                            ).map(filteredProduct => (
                                <Product key={filteredProduct._id} product={filteredProduct} />
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

export default CategoryBasedPage
