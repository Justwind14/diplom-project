import React, {useState} from 'react';
import {Link} from "react-router-dom";
import CatalogFilterList from "./CatalogFilterList";

const CatalogFilter = () => {
    const [filterTypeList, setFilterTypeList] = useState([
        {id: 1, title: 'CATEGORY'},
        {id: 2, title: 'BRAND'},
        {id: 3, title: 'DESIGNER'}
    ])
    return (
        <details className="filter">
            <summary className="filter__list">
                <h3 className="filter__title">FILTER</h3>
                <svg width="15" height="10" viewBox="0 0 15 10" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M0.833333 10H4.16667C4.625 10 5 9.625 5 9.16667C5 8.70833 4.625 8.33333 4.16667 8.33333H0.833333C0.375 8.33333 0 8.70833 0 9.16667C0 9.625 0.375 10 0.833333 10ZM0 0.833333C0 1.29167 0.375 1.66667 0.833333 1.66667H14.1667C14.625 1.66667 15 1.29167 15 0.833333C15 0.375 14.625 0 14.1667 0H0.833333C0.375 0 0 0.375 0 0.833333ZM0.833333 5.83333H9.16667C9.625 5.83333 10 5.45833 10 5C10 4.54167 9.625 4.16667 9.16667 4.16667H0.833333C0.375 4.16667 0 4.54167 0 5C0 5.45833 0.375 5.83333 0.833333 5.83333Z"
                        fill="black"/>
                </svg>
            </summary>
            <div className="filter__content">
                {
                    filterTypeList.map((filterType) => (
                        <CatalogFilterList key={filterType.id} filterType={filterType}/>
                    ))
                }
            </div>
        </details>
    );
};

export default CatalogFilter;