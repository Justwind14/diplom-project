import React from 'react';

const MainTop = () => {
    return (
        <section className="top center">
            <div className="top__img">
                <picture>
                    <source media="(min-width: 1024px)" srcSet={require("../../img/top_img_big.png")}/>
                    <img alt="fashion man" src={require("../../img/top_img_small.png")}/>
                </picture>
            </div>
            <div className="top__title">
                <h1 className="top__name">THE BRAND</h1>
                <p className="top__heading">OF LUXURIOUS <span className="accent_text">FASHION</span></p>
            </div>
        </section>
    );
};

export default MainTop;