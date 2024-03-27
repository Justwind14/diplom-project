import React, {useContext, useEffect, useRef, useState} from 'react';
import CatalogFilter from "../catalog/CatalogFilter";
import MainGoodsList from "../main/MainGoodsList";
import {GoodsContext} from "../../context/Context";
import Sort from "../UI/sort/Sort";
import ProductTopPart from "../product/ProductTopPart";
import usePagination from "../utils/usePagination"
import Pagination from "../UI/Pagination";
import {useFilter} from "../utils/useFilter";


// Основной компонент страницы каталога
const Catalog = () => {
    // Ссылка на начало списка товаров для прокрутки
    const goodsListRef = useRef(null);
    // Получение списка товаров из контекста
    const goodsForFilter = useContext(GoodsContext);
    // Состояние для управления текущей страницей пагинации
    const [currentPage, setCurrentPage] = useState(1);

    // вызываем хук управления состоянием сортировки и получаем необходимые переменные, функции и отфильтрованные товары
    const {selectedSizes, handleSizeChange, selectedColors, handleColorChange, selectedPriceRange,
        handlePriceRangeChange, filteredGoods} = useFilter(goodsForFilter);

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
                        <Sort
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