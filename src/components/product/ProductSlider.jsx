import React from 'react';

const ProductSlider = () => {


    return (
        <div className="slider">
            <div className="slider__wrapper">
                <button className="slider__arrow">
                    <svg className="slider__icon" width="31" height="31" viewBox="0 0 31 31" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <path d="M21.6998 7.7499L13.9498 15.4999L21.6998 23.2499L20.1498 26.3499L9.2998 15.4999L20.1498 4.6499L21.6998 7.7499Z"
                              fill="black"/>
                    </svg>
                </button>
                <div className="slider__img">
                    <picture>
                        <source media="(min-width: 1024px)" srcSet={require("../../img/main-product_big.png")}/>
                            <source media="(min-width: 768px)" srcSet={require("../../img/main-product_medium.png")}/>
                                <source media="(min-width: 375px)" srcSet={require("../../img/main-product_small.png")}/>
                                    <img alt="fashionable woman sitting" src={require("../../img/main-product_big.png")}/>
                    </picture>
                </div>
                <button className="slider__arrow">
                    <svg className="slider__icon" width="31" height="31" viewBox="0 0 31 31" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.2998 23.2499L17.0498 15.4999L9.2998 7.7499L10.8498 4.6499L21.6998 15.4999L10.8498 26.3499L9.2998 23.2499Z"
                              fill="black"/>
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default ProductSlider;