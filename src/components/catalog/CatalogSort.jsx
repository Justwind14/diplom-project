import React from 'react';
import CatalogSortSize from "./CatalogSortSize";
import CatalogSortPrice from "./CatalogSortPrice";
import CatalogSortColor from "./CatalogSortColor";

const CatalogSort = ({onSizeChange, onPriceRangeChange, onColorChange}) => {


    return (
        <div className="sort-wrapper">
            <CatalogSortColor onColorChange={onColorChange}/>
            <CatalogSortSize onSizeChange={onSizeChange}/>
            <CatalogSortPrice onPriceRangeChange={onPriceRangeChange}/>
        </div>
    );
};

export default CatalogSort;