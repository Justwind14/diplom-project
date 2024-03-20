import React from 'react';
import {Link} from "react-router-dom";
import CartItem from "../cart/CartItem";
import CartShipping from "../cart/CartShipping";
import Buttons from "../UI/Buttons";

const Cart = () => {


    const submitToAcquiring = (e) => {

    }

    return (
        <>
            <h1 className="hidden">SHOPPING CART</h1>
            <section className="second-header center">
                <h2 className="second-header__title">SHOPPING CART</h2>
            </section>
            <section className="cart center">
                <div className="cart-cards">
                    <div className="cards-buttons">
                        <div className="cards">
                            <CartItem/>

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
                        <CartShipping/>

                        <div className="total">
                            <div className="total__sum">
                                <p className="total__sub">SUB TOTAL&emsp;&emsp;$900</p>
                                <p className="total__grand">GRAND TOTAL&emsp;&emsp;<span className="total__grand_bold accent_text">$900</span>
                                </p>
                            </div>
                            <Buttons onClick={submitToAcquiring} className="total__btn" type="submit">PROCEED TO CHECKOUT</Buttons>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Cart;