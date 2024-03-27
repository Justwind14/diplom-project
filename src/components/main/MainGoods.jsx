import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import MainGoodsList from "./MainGoodsList";
import {GoodsContext} from "../../context/Context";

const MainGoods = () => {
    const goods = useContext(GoodsContext);
    // создаем переменную, котоаря передается в отрисовку карточек товаров, регулируя их количество
    const itemsCountForPrint = 6;

    return (
        <div className="center">
            <section className="goods">
                <h2 className="goods__title">Featured Items</h2>
                <p className="goods__text">Shop for items based on what we featured in this week</p>
                <div className="goods__products">
                    <MainGoodsList goods={goods} itemCount={itemsCountForPrint}/>
                </div>
                <div className="goods__button">
                    <Link className="goods__btn" to="/catalog#scrollToGoods">Browse All Product</Link>
                </div>
            </section>
        </div>
    );
};

export default MainGoods;