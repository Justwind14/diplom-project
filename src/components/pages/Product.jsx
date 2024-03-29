import React, {useContext, useRef, useState} from 'react';
import ProductMainPart from "../product/ProductMainPart";
import ProductTopPart from "../product/ProductTopPart";
import ProductSlider from "../product/ProductSlider";
import MainGoodsList from "../main/MainGoodsList";
import {GoodsContext} from "../../context/Context";
import {useFilter} from "../utils/useFilter";

const Product = () => {
    // создаем хук реф для перехода к слайдеру после оппределенного действия
    const sliderRef = useRef(null);
    // получаем свойства всех товаров для отрисовки
    const goodsForProduct = useContext(GoodsContext);
    // вызываем хук управления состоянием сортировки и получаем необходимые переменные, функции и отфильтрованные товары
    const {handleSizeChange, handleColorChange, handlePriceRangeChange, filteredGoods} = useFilter(goodsForProduct);

    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

    // Функция для изменения текущего слайда
    const changeSlide = (index) => {
        setCurrentSlideIndex(index);
    };

    return (
        <>
            <ProductTopPart/>
            <ProductSlider goods={goodsForProduct}
                           changeSlide={changeSlide}
                           currentSlideIndex={currentSlideIndex}
                           ref={sliderRef}
            />
            <ProductMainPart
                onSizeChange={handleSizeChange}
                onPriceRangeChange={handlePriceRangeChange}
                onColorChange={handleColorChange}
                currentSlide={goodsForProduct[currentSlideIndex]}
                sliderRef={sliderRef}
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