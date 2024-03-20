import React from 'react';
import CatalogSoRtTrend from "./CatalogSoRtTrend";
import CatalogSortSize from "./CatalogSortSize";
import CatalogSortPrice from "./CatalogSortPrice";

const CatalogSort = () => {
    return (
        <div className="sort-wrapper">
            <CatalogSoRtTrend/>
            <CatalogSortSize/>
            <CatalogSortPrice/>
        </div>
    );
};

export default CatalogSort;