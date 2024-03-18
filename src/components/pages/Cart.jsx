import React from 'react';
import {Link} from "react-router-dom";

const Cart = () => {
    return (
        <div className="main">
            <h1 className="hidden">SHOPPING CART</h1>
            <section className="second-header center">
                <h2 className="second-header__title">SHOPPING CART</h2>
            </section>
            <section className="cart center">
                <div className="cart-cards">
                    <div className="cards-buttons">
                        <div className="cards">
                            <div className="card-min">
                                <div>
                                    <picture>
                                        <source media="(min-width: 768px)" srcSet={require("../../img/card1_big.png")}/>
                                        <source media="(min-width: 375px)" srcSet={require("../../img/card1_small.png")}/>
                                        <img className="card-min__img" alt="fashionable man"
                                             src={require("../../img/card1_big.png")}/>
                                    </picture>
                                </div>
                                <div className="card-min__desc">
                                    <div className="card-min__top">
                                        <Link to="/product" className="card-min__title">MANGO PEOPLE T-SHIRT</Link>
                                        <svg className="card-min__close" width="18" height="18" viewBox="0 0 18 18" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path d="M11.2453 9L17.5302 2.71516C17.8285 2.41741 17.9962 2.01336 17.9966 1.59191C17.997 1.17045 17.8299 0.76611 17.5322 0.467833C17.2344 0.169555 16.8304 0.00177586 16.4089 0.00140366C15.9875 0.00103146 15.5831 0.168097 15.2848 0.465848L9 6.75069L2.71516 0.465848C2.41688 0.167571 2.01233 0 1.5905 0C1.16868 0 0.764125 0.167571 0.465848 0.465848C0.167571 0.764125 0 1.16868 0 1.5905C0 2.01233 0.167571 2.41688 0.465848 2.71516L6.75069 9L0.465848 15.2848C0.167571 15.5831 0 15.9877 0 16.4095C0 16.8313 0.167571 17.2359 0.465848 17.5342C0.764125 17.8324 1.16868 18 1.5905 18C2.01233 18 2.41688 17.8324 2.71516 17.5342L9 11.2493L15.2848 17.5342C15.5831 17.8324 15.9877 18 16.4095 18C16.8313 18 17.2359 17.8324 17.5342 17.5342C17.8324 17.2359 18 16.8313 18 16.4095C18 15.9877 17.8324 15.5831 17.5342 15.2848L11.2453 9Z"
                                                  fill="#575757"/>
                                        </svg>
                                    </div>
                                    <p className="card-min__text">Price: <span className="accent_text">$300</span></p>
                                    <p className="card-min__text">Color: Red</p>
                                    <p className="card-min__text">Size: Xl</p>
                                    <p className="card-min__text">

                                        <label className="card-min__text" for="quantity">Quantity:</label>
                                        <input id="quantity" className="quantity" type="number" name="quantity" min="1" max="9"
                                               placeholder="2"/>
                                    </p>
                                </div>
                            </div>
                            <div className="card-min">
                                <div>
                                    <picture>
                                        <source media="(min-width: 768px)" srcSet={require("../../img/card2_big.png")}/>
                                        <source media="(min-width: 375px)" srcSet={require("../../img/card2_small.png")}/>
                                        <img className="card-min__img" alt="fashionable man"
                                             src={require("../../img/card2_big.png")}/>
                                    </picture>
                                </div>
                                <div className="card-min__desc">
                                    <div className="card-min__top">
                                        <Link to="/product" className="card-min__title">MANGO PEOPLE T-SHIRT</Link>
                                        <svg className="card-min__close" width="18" height="18" viewBox="0 0 18 18" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path d="M11.2453 9L17.5302 2.71516C17.8285 2.41741 17.9962 2.01336 17.9966 1.59191C17.997 1.17045 17.8299 0.76611 17.5322 0.467833C17.2344 0.169555 16.8304 0.00177586 16.4089 0.00140366C15.9875 0.00103146 15.5831 0.168097 15.2848 0.465848L9 6.75069L2.71516 0.465848C2.41688 0.167571 2.01233 0 1.5905 0C1.16868 0 0.764125 0.167571 0.465848 0.465848C0.167571 0.764125 0 1.16868 0 1.5905C0 2.01233 0.167571 2.41688 0.465848 2.71516L6.75069 9L0.465848 15.2848C0.167571 15.5831 0 15.9877 0 16.4095C0 16.8313 0.167571 17.2359 0.465848 17.5342C0.764125 17.8324 1.16868 18 1.5905 18C2.01233 18 2.41688 17.8324 2.71516 17.5342L9 11.2493L15.2848 17.5342C15.5831 17.8324 15.9877 18 16.4095 18C16.8313 18 17.2359 17.8324 17.5342 17.5342C17.8324 17.2359 18 16.8313 18 16.4095C18 15.9877 17.8324 15.5831 17.5342 15.2848L11.2453 9Z"
                                                  fill="#575757"/>
                                        </svg>
                                    </div>
                                    <p className="card-min__text">Price: <span className="accent_text">$300</span></p>
                                    <p className="card-min__text">Color: Red</p>
                                    <p className="card-min__text">Size: Xl</p>
                                    <p className="card-min__text">

                                        <label className="card-min__text" for="quantity2">Quantity:</label>
                                        <input id="quantity2" className="quantity" type="number" name="quantity" min="1" max="9"
                                               placeholder="2"/>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <ul className="buttons">
                            <li className="buttons">
                                <Link to="#" className="cart-button">Clear shopping cart</Link>
                            </li>
                            <li className="buttons">
                                <Link to="/catalog" className="cart-button">Continue shopping</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="shipping-total">
                        <div className="shipping">
                            <form action="#">
                                <h3 className="shipping__title">SHIPPING ADDRESS</h3>
                                <label className="hidden" for="country">Country</label>
                                <input id="country" className="shipping__input" autofocus type="text" name="country"
                                       placeholder="Bangladesh"/>
                                    <label className="hidden" for="state">State</label>
                                    <input id="state" className="shipping__input" type="text" name="state" placeholder="State"/>
                                        <label className="hidden" for="postcode">Postcode</label>
                                        <input id="postcode" className="shipping__input" type="text" name="postcode" placeholder="Postcode / Zip"/>
                                            <button className="shipping__btn" type="submit">Get a quote</button>
                            </form>
                        </div>
                        <div className="total">
                            <div className="total__sum">
                                <p className="total__sub">SUB TOTAL&emsp;&emsp;$900</p>
                                <p className="total__grand">GRAND TOTAL&emsp;&emsp;<span className="total__grand_bold accent_text">$900</span>
                                </p>
                            </div>
                            <button className="total__btn" type="submit">PROCEED TO CHECKOUT</button>

                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Cart;