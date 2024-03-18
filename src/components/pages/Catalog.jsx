import React, {useContext} from 'react';
import CatalogFilter from "../Catalog/CatalogFilter";
import MainGoodsList from "../Main/MainGoodsList";
import {GoodsContext} from "../../context/Context";
import {Link} from "react-router-dom";
import List from "../List";


const Catalog = () => {
    const goodsForFilter = useContext(GoodsContext);

    const breadcrumbsItems = [
        <Link to="/mainpage" className="breadcrumbs__link">HOME</Link>,
        <Link to="/catalog" className="breadcrumbs__link">MEN</Link>,
        <Link to="/product" className="breadcrumbs__link">NEW ARRIVALS</Link>
    ]

    return (
        <>
            <h1 className="hidden">Catalog</h1>
            <section className="second-header center">
                <h2 className="second-header__title">NEW ARRIVALS</h2>
                <nav className="breadcrumbs">
                    <List className="breadcrumbs__ul" itemClassName="breadcrumbs__li" items={breadcrumbsItems}/>
                </nav>
            </section>

            <div className="center">
                <section className="filter-sort">
                    <div className="filter-sort-wrapper">
                        <CatalogFilter/>
                        <div className="sort-wrapper">
                            <div className="sort">
                                <details className="sort__trend">
                                    <summary className="sort__list">
                                        <h3 className="sort__title">TRENDING&nbsp;NOW</h3>
                                        <svg width="11" height="6" viewBox="0 0 11 6" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M5.00214 5.00214C4.83521 5.00247 4.67343 4.94433 4.54488 4.83782L0.258102 1.2655C0.112196 1.14422 0.0204417 0.969958 0.00302325 0.781035C-0.0143952 0.592112 0.0439493 0.404007 0.165221 0.258101C0.286493 0.112196 0.460759 0.0204417 0.649682 0.00302327C0.838605 -0.0143952 1.02671 0.043949 1.17262 0.165221L5.00214 3.36602L8.83167 0.279536C8.90475 0.220188 8.98884 0.175869 9.0791 0.149125C9.16937 0.122382 9.26403 0.113741 9.35764 0.1237C9.45126 0.133659 9.54198 0.162021 9.6246 0.207156C9.70722 0.252292 9.7801 0.313311 9.83906 0.386705C9.90449 0.460167 9.95405 0.546351 9.98462 0.639855C10.0152 0.733359 10.0261 0.83217 10.0167 0.930097C10.0073 1.02802 9.97784 1.12296 9.93005 1.20895C9.88227 1.29494 9.81723 1.37013 9.73904 1.42982L5.45225 4.88068C5.32002 4.97036 5.16154 5.01312 5.00214 5.00214Z"
                                                fill="#6F6E6E"/>
                                        </svg>
                                    </summary>
                                    <ul className="sort__content sort__content-trend">
                                        <li className="sort__item">
                                            <input className="sort__check" type="checkbox" name="minimal" id="minimal"/>
                                            <label className="sort__label" htmlFor="minimal">Minimal</label>
                                        </li>
                                        <li className="sort__item">
                                            <input className="sort__check" type="checkbox" name="shine" id="shine"/>
                                            <label className="sort__label" htmlFor="shine">Shine</label>
                                        </li>
                                        <li className="sort__item">
                                            <input className="sort__check" type="checkbox" name="unisex" id="unisex"/>
                                            <label className="sort__label" htmlFor="unisex">Unisex</label>
                                        </li>

                                    </ul>

                                </details>
                            </div>
                            <div className="sort">
                                <details className="sort__size">
                                    <summary className="sort__list">
                                        <h3 className="sort__title">SIZE</h3>
                                        <svg width="11" height="6" viewBox="0 0 11 6" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M5.00214 5.00214C4.83521 5.00247 4.67343 4.94433 4.54488 4.83782L0.258102 1.2655C0.112196 1.14422 0.0204417 0.969958 0.00302325 0.781035C-0.0143952 0.592112 0.0439493 0.404007 0.165221 0.258101C0.286493 0.112196 0.460759 0.0204417 0.649682 0.00302327C0.838605 -0.0143952 1.02671 0.043949 1.17262 0.165221L5.00214 3.36602L8.83167 0.279536C8.90475 0.220188 8.98884 0.175869 9.0791 0.149125C9.16937 0.122382 9.26403 0.113741 9.35764 0.1237C9.45126 0.133659 9.54198 0.162021 9.6246 0.207156C9.70722 0.252292 9.7801 0.313311 9.83906 0.386705C9.90449 0.460167 9.95405 0.546351 9.98462 0.639855C10.0152 0.733359 10.0261 0.83217 10.0167 0.930097C10.0073 1.02802 9.97784 1.12296 9.93005 1.20895C9.88227 1.29494 9.81723 1.37013 9.73904 1.42982L5.45225 4.88068C5.32002 4.97036 5.16154 5.01312 5.00214 5.00214Z"
                                                fill="#6F6E6E"/>
                                        </svg>
                                    </summary>
                                    <ul className="sort__content sort__content-size">
                                        <li className="sort__item">
                                            <input className="sort__check" type="checkbox" name="size XS" id="XS"/>
                                            <label className="sort__label" htmlFor="XS">XS</label>
                                        </li>
                                        <li className="sort__item">
                                            <input className="sort__check" type="checkbox" name="size S" id="S"/>
                                            <label className="sort__label" htmlFor="S">S</label>
                                        </li>
                                        <li className="sort__item">
                                            <input className="sort__check" type="checkbox" name="size M" id="M"/>
                                            <label className="sort__label" htmlFor="M">M</label>
                                        </li>
                                        <li className="sort__item">
                                            <input className="sort__check" type="checkbox" name="size L" id="L"/>
                                            <label className="sort__label" htmlFor="L">L</label>
                                        </li>
                                        <li className="sort__item">
                                            <input className="sort__check" type="checkbox" name="size XL" id="XL"/>
                                            <label className="sort__label" htmlFor="XL">XL</label>
                                        </li>
                                    </ul>

                                </details>
                            </div>
                            <div className="sort">
                                <details className="sort__price">
                                    <summary className="sort__list">
                                        <h3 className="sort__title">PRICE</h3>
                                        <svg width="11" height="6" viewBox="0 0 11 6" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M5.00214 5.00214C4.83521 5.00247 4.67343 4.94433 4.54488 4.83782L0.258102 1.2655C0.112196 1.14422 0.0204417 0.969958 0.00302325 0.781035C-0.0143952 0.592112 0.0439493 0.404007 0.165221 0.258101C0.286493 0.112196 0.460759 0.0204417 0.649682 0.00302327C0.838605 -0.0143952 1.02671 0.043949 1.17262 0.165221L5.00214 3.36602L8.83167 0.279536C8.90475 0.220188 8.98884 0.175869 9.0791 0.149125C9.16937 0.122382 9.26403 0.113741 9.35764 0.1237C9.45126 0.133659 9.54198 0.162021 9.6246 0.207156C9.70722 0.252292 9.7801 0.313311 9.83906 0.386705C9.90449 0.460167 9.95405 0.546351 9.98462 0.639855C10.0152 0.733359 10.0261 0.83217 10.0167 0.930097C10.0073 1.02802 9.97784 1.12296 9.93005 1.20895C9.88227 1.29494 9.81723 1.37013 9.73904 1.42982L5.45225 4.88068C5.32002 4.97036 5.16154 5.01312 5.00214 5.00214Z"
                                                fill="#6F6E6E"/>
                                        </svg>
                                    </summary>
                                    <ul className="sort__content sort__content-price">

                                        <li className="sort__item">
                                            <input className="sort__radio" type="radio" id="price1" name="price"
                                                   value="0-500"/>
                                            <label className="sort__label sort__label-price" htmlFor="price1">0 -
                                                500$</label>
                                        </li>
                                        <li className="sort__item">
                                            <input className="sort__radio" type="radio" id="price2" name="price"
                                                   value="500-1000"/>
                                            <label className="sort__label sort__label-price" htmlFor="price2">500$ -
                                                1000$</label>
                                        </li>
                                        <li className="sort__item">
                                            <input className="sort__radio" type="radio" id="price3" name="price"
                                                   value="1000-5000"/>
                                            <label className="sort__label sort__label-price" htmlFor="price3">1000$ -
                                                5000$</label>
                                        </li>
                                        <li className="sort__item">
                                            <input className="sort__radio" type="radio" id="price4" name="price"
                                                   value="5000-10000"/>
                                            <label className="sort__label sort__label-price" htmlFor="price4">5000$ -
                                                10000$</label>
                                        </li>
                                        <li className="sort__item">
                                            <input className="sort__radio" type="radio" id="price5" name="price"
                                                   value="10000-25000"/>
                                            <label className="sort__label sort__label-price" htmlFor="price5">10000$ -
                                                25000$</label>
                                        </li>


                                    </ul>

                                </details>
                            </div>
                        </div>
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