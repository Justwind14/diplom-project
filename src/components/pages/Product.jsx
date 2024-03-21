import React, {useContext} from 'react';
import ProductMainPart from "../product/ProductMainPart";
import ProductTopPart from "../product/ProductTopPart";
import ProductSlider from "../product/ProductSlider";
import MainGoodsList from "../main/MainGoodsList";
import {GoodsContext} from "../../context/Context";
import {GoodsCartContext} from "../../context/ContextForCart";

const Product = () => {
    const goodsForProduct = useContext(GoodsContext);

    const testGoods = useContext(GoodsCartContext);

    return (
        <>
            <ProductTopPart/>
            <ProductSlider/>
            <ProductMainPart/>
            <div className="center">
                <section className="goods">
                    <div className="goods__products">
                        <MainGoodsList goods={goodsForProduct} itemCount={4}/>
                    </div>
                </section>
            </div>
        </>

    );
};

export default Product;