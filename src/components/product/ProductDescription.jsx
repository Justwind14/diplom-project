import React from 'react';

const ProductDescription = () => {
    return (
        <>
            <h2 className="hidden">Product description</h2>
            <div className="product__up">
                <h3 className="product__collection">WOMEN COLLECTION</h3>
                <svg className="product__divider" width="63" height="4" viewBox="0 0 63 4" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                    <path d="M63 0.786865H0V3.81225H63V0.786865Z" fill="#EF5B70"/>
                </svg>
                <p className="product__title">MOSCHINO CHEAP AND CHIC</p>
                <p className="product__description">Compellingly actualize fully researched processes before proactive
                    outsourcing. Progressively syndicate collaborative architectures before cutting-edge services.
                    Completely visualize parallel core competencies rather than exceptional portals. </p>
                <p className="product__price">$561</p>
            </div>
        </>
    );
};

export default ProductDescription;