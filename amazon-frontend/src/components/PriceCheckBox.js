import React from 'react'
import "../styles/PriceCheckBox.css"

const prices = [
    {
        id: "1",
        name: "Any",
        priceRange: []
    },
    {
        id: "2",
        name: "$0 - $100",
        priceRange: [0,100]
    },
    {
        id: "3",
        name: "$100 - $200",
        priceRange: [100,200]
    },
    {
        id: "4",
        name: "$200 - $300",
        priceRange: [200,300]
    },
    {
        id: "5",
        name: "$300 - $400",
        priceRange: [300,400]
    },
    {
        id: "6",
        name: "$400 - $600",
        priceRange: [400,600]
    },
    {
        id: "7",
        name: "$600 - $800",
        priceRange: [600,800]
    }
]



const PriceCheckBox = () => {
    return (
        <div className="price-range-container">
            {prices.map((price)=>(
                <span className="price-range-checkbox">
                    <input type="radio" id="price-range" value={price.name}
                        name="pricerange" required>
                    </input>
                    <label htmlFor="price-range">
                        {price.name}
                    </label>
                </span>
            ))}
        </div>
    )
}

export default PriceCheckBox
