import React, {useContext, useState} from 'react';
import {Link} from "react-router-dom";
import MainGoodsList from "./MainGoodsList";
import {GoodsContext} from "../../context/Context";

const MainGoods = () => {
    const takes = useContext(GoodsContext);

    return (
        <div className="center">
            <section className="goods">
                <h2 className="goods__title">Featured Items</h2>
                <p className="goods__text">Shop for items based on what we featured in this week</p>
                <div className="goods__products">
                    <MainGoodsList goods={takes} itemCount={7}/>
                </div>
                <div className="goods__button">
                    <Link className="goods__btn" to="/catalog">Browse All Product</Link>
                </div>
            </section>
        </div>
    );
};

export default MainGoods;