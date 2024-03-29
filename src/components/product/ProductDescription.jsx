import React from 'react';

const ProductDescription = ({currentSlide}) => {

    return (
        <>
            <h2 className="hidden">Product description</h2>
            <div className="product__up">
                <h3 className="product__collection">{currentSlide.category}</h3>
                <svg className="product__divider" width="63" height="4" viewBox="0 0 63 4" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                    <path d="M63 0.786865H0V3.81225H63V0.786865Z" fill="#EF5B70"/>
                </svg>
                <p className="product__title">{currentSlide.title}</p>
                <p className="product__description">{currentSlide.body}</p>
                <p className="product__price">${currentSlide.price}</p>
            </div>
        </>
    );
};

export default ProductDescription;