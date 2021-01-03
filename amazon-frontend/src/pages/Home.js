import React from 'react'
import ProductList from '../components/ProductList';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "../styles/Home.css"

const Home = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
    }

    return (
        <div>

            <div className="banner-container">

                <Slider {...settings}>

                    <div className="banners">
                      <img src="https://refixya.com/assets/media/uploadmajor-brand/hp/hp-laptop-service-centre-kalyan/hp.png" alt=""/>
                    </div>
                    <div className="banners">
                      <img src="https://m.media-amazon.com/images/S/aplus-media/vc/342b936a-69f1-4e59-89ba-7ddb98c1acda.jpg" alt=""/>
                    </div>
                    <div className="banners">
                        <img src="https://cdn.shopify.com/s/files/1/1780/7915/files/Thermaltake_Level_20_RGB_Titanium_Gaming_Keyboard_From_The_Peripheral_Store_Banner_01.jpg?v=1598266526" alt=""/>
                    </div>
                    <div className="banners">
                        <img src="https://cdn.shopify.com/s/files/1/1780/7915/files/Game_Monitor_6a7a1deb-2d61-4307-99ac-f8c5a18d298f.jpg?8000210842524768871" alt=""/>
                    </div>

                </Slider>
            
            </div>


            <ProductList/>
        </div>
    )
}

export default Home
