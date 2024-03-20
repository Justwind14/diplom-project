import React, {useContext} from 'react';
import CatalogFilter from "../catalog/CatalogFilter";
import MainGoodsList from "../main/MainGoodsList";
import {GoodsContext} from "../../context/Context";
import CatalogSort from "../catalog/CatalogSort";
import ProductTopPart from "../product/ProductTopPart";


const Catalog = () => {
    const goodsForFilter = useContext(GoodsContext);

    return (
        <>
            <h1 className="hidden">Catalog</h1>
            <ProductTopPart/>
            <div className="center">
                <section className="filter-sort">
                    <div className="filter-sort-wrapper">
                        <CatalogFilter/>
                        <CatalogSort/>
                    </div>
                </section>
            </div>
            <div className="center">
                <section className="goods">
                    <div className="goods__products">
                        <MainGoodsList goods={goodsForFilter} itemCount={goodsForFilter.length + 1}/>
                    </div>
                </section>
            </div>
        </>
    );
};

export default Catalog;