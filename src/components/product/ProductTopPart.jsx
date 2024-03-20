import React from 'react';
import {Link} from "react-router-dom";
import LiLinks from "../LiLinks";

const ProductTopPart = () => {
    const breadcrumbs = [
        {id: 1,  linkPath: '/mainpage', itemTitle: 'HOME', classNm: 'breadcrumbs__link'},
        {id: 1,  linkPath: '/catalog', itemTitle: 'MEN', classNm: 'breadcrumbs__link'},
        {id: 1,  linkPath: '/product', itemTitle: 'NEW ARRIVALS', classNm: 'breadcrumbs__link'},
    ]

    return (
        <section className="second-header center">
            <h2 className="second-header__title">NEW ARRIVALS</h2>
            <nav className="breadcrumbs">
                <ul className="breadcrumbs__ul">
                    {
                        breadcrumbs.map((breadcrumb) => (
                            <LiLinks key={breadcrumb.id} classItem='breadcrumbs__li' item={breadcrumb}/>
                        ))
                    }
                </ul>
            </nav>
        </section>
    );
};

export default ProductTopPart;