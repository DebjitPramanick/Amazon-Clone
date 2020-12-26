import React from 'react'
import LoopIcon from '@material-ui/icons/Loop';
import "../styles/LoadingBox.css"

const LoadingBox = () => {
    return (
        <div className="loading-box">
            <LoopIcon/>
            <p>Loading products....</p>
        </div>
    )
}

export default LoadingBox
