import React, {useContext, useEffect, useRef, useState} from 'react';
import CatalogFilter from "../catalog/CatalogFilter";
import MainGoodsList from "../main/MainGoodsList";
import {GoodsContext} from "../../context/Context";
import CatalogSort from "../catalog/CatalogSort";
import ProductTopPart from "../product/ProductTopPart";
import usePagination from "../utils/usePagination"
import Pagination from "../UI/Pagination";


// Основной компонент страницы каталога
const Catalog = () => {
    // Ссылка на начало списка товаров для прокрутки
    const goodsListRef = useRef(null);
    // Получение списка товаров из контекста
    const goodsForFilter = useContext(GoodsContext);
    // Состояние для управления текущей страницей пагинации
    const [currentPage, setCurrentPage] = useState(1);
    // Состояния для хранения выбранных фильтров
    const [selectedSizes, setSelectedSizes] = useState({});
    const [selectedColors, setSelectedColors] = useState({});
    const [selectedPriceRange, setSelectedPriceRange] = useState([0, Infinity]);

    // Обработчики изменения фильтров
    const handleSizeChange = (size) => {
        const sizeLowerCase = size.toLowerCase(); // Приводим к нижнему регистру
        setSelectedSizes(prev => ({ ...prev, [sizeLowerCase]: !prev[sizeLowerCase] }));
    };

    const handleColorChange = (color) => {
        const colorLowerCase = color.toLowerCase(); // Приводим к нижнему регистру
        setSelectedColors(prev => ({ ...prev, [colorLowerCase]: !prev[colorLowerCase] }));
    };

    const handlePriceRangeChange = (range) => {
        setSelectedPriceRange(range);
    };

    // Применение фильтров к списку товаров
    const filteredGoods = goodsForFilter.filter(good => {
        const isAnyColorSelected = Object.values(selectedColors).some(value => value);
        const isAnySizeSelected = Object.values(selectedSizes).some(value => value);

        // Условия для фильтрации
        const sizeCondition = !isAnySizeSelected || selectedSizes[good.size.toLowerCase()];
        const colorCondition = !isAnyColorSelected || selectedColors[good.color.toLowerCase()];
        const priceCondition = good.price >= selectedPriceRange[0] && good.price <= selectedPriceRange[1];

        return colorCondition && sizeCondition && priceCondition;
    });

    // Эффект для сброса текущей страницы при изменении фильтров
    useEffect(() => {
        setCurrentPage(1);
    }, [selectedSizes, selectedColors, selectedPriceRange]);

    // Подключение хука пагинации с отфильтрованным списком товаров
    const { currentItems, totalPages, paginate, nextPage, prevPage } =
        usePagination(filteredGoods, 9, currentPage, setCurrentPage);

    // Эффект для прокрутки к началу списка товаров при смене страницы или наличии параметра в URL
    useEffect(() => {
        if (window.location.hash === '#scrollToGoods') {
            goodsListRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else {
            goodsListRef.current?.scrollIntoView({ behavior: 'smooth' });
        }
    }, [currentPage]);

    // рендер
    return (
        <>
            <h1 className="hidden">Catalog</h1>
            <ProductTopPart/>
            <div className="center">
                <section className="filter-sort" ref={goodsListRef}>
                    <div className="filter-sort-wrapper">
                        <CatalogFilter/>
                        <CatalogSort
                            onSizeChange={handleSizeChange}
                            onPriceRangeChange={handlePriceRangeChange}
                            onColorChange={handleColorChange}
                        />
                    </div>
                </section>
            </div>
            <div className="center">
                <section className="goods">
                    <div className="goods__products">
                        <MainGoodsList goods={currentItems} itemCount={goodsForFilter.length + 1}/>
                    </div>
                </section>
            </div>
            <div className="pagination-container">
                <Pagination
                    totalPages={totalPages}
                    currentPage={currentPage}
                    paginate={paginate}
                    prevPage={prevPage}
                    nextPage={nextPage}
                />
            </div>
        </>
    );
};

export default Catalog;