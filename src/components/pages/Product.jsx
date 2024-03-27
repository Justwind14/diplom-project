import React, {useContext} from 'react';
import ProductMainPart from "../product/ProductMainPart";
import ProductTopPart from "../product/ProductTopPart";
import ProductSlider from "../product/ProductSlider";
import MainGoodsList from "../main/MainGoodsList";
import {GoodsContext} from "../../context/Context";
import {useFilter} from "../utils/useFilter";

const Product = () => {
    // получаем свойства всех товаров для отрисовки
    const goodsForProduct = useContext(GoodsContext);
    // вызываем хук управления состоянием сортировки и получаем необходимые переменные, функции и отфильтрованные товары
    const {handleSizeChange, handleColorChange, handlePriceRangeChange, filteredGoods} = useFilter(goodsForProduct);

    return (
        <>
            <ProductTopPart/>
            <ProductSlider/>
            <ProductMainPart
                onSizeChange={handleSizeChange}
                onPriceRangeChange={handlePriceRangeChange}
                onColorChange={handleColorChange}
            />
            <div className="center">
                <section className="goods">
                    <div className="goods__products">
                        <MainGoodsList goods={filteredGoods} itemCount={3}/>
                    </div>
                </section>
            </div>
        </>
    );
};

export default Product;