import React from 'react';
import SortSize from "./SortSize";
import SortPrice from "./SortPrice";
import SortColor from "./SortColor";

const Sort = ({onSizeChange, onPriceRangeChange, onColorChange}) => {


    return (
        <div className="sort-wrapper">
            <SortColor onColorChange={onColorChange}/>
            <SortSize onSizeChange={onSizeChange}/>
            <SortPrice onPriceRangeChange={onPriceRangeChange}/>
        </div>
    );
};

export default Sort;