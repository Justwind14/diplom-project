import React, {useState} from 'react';
import {Link} from "react-router-dom";
import CatalogDetailItem from "./CatalogDetailItem";

const CatalogFilterList = (props) => {
    const [detailItems, setDetailItems] = useState([
        {title: 'CATEGORY', kindOf: 'Accessories'},
        {title: 'CATEGORY', kindOf: 'Bags'},
        {title: 'CATEGORY', kindOf: 'Denim'},
        {title: 'CATEGORY', kindOf: 'Hoodies & Sweatshirts'},
        {title: 'CATEGORY', kindOf: 'Jackets & Coats'},
        {title: 'CATEGORY', kindOf: 'Polos'},
        {title: 'CATEGORY', kindOf: 'Shirts'},
        {title: 'BRAND', kindOf: 'Channel'},
        {title: 'BRAND', kindOf: 'Dior'},
        {title: 'BRAND', kindOf: 'Mango'},
        {title: 'BRAND', kindOf: 'Zara'},
        {title: 'DESIGNER', kindOf: 'Giorgio Armani'},
        {title: 'DESIGNER', kindOf: 'Michel Klein'},
        {title: 'DESIGNER', kindOf: 'Coco Chanel'},
    ]);
    return (
        <details className="filter__item" open>
            <summary className="filter__heading">{props.filterType.title}</summary>
            <div className="filter__link-box">
                {detailItems.map((detailItem, index) => (
                    props.filterType.title === detailItem.title ?
                    <CatalogDetailItem key={index} detailItem={detailItem}/> :
                        props.filterType.title === detailItem.title ?
                        <CatalogDetailItem key={index} detailItem={detailItem}/> :
                            props.filterType.title === detailItem.title ?
                            <CatalogDetailItem key={index} detailItem={detailItem}/> :
                            console.log('категория не найдена')
                ))}
            </div>
        </details>
    );
};

export default CatalogFilterList;