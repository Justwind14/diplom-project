import React, {useContext, useState} from 'react';
import {Link} from "react-router-dom";
import CartItem from "../cart/CartItem";
import CartShipping from "../cart/CartShipping";
import Buttons from "../UI/Buttons";
import {GoodsCartContext} from "../../context/ContextForCart";

const Cart = () => {
    const {goods, cartClearing, itemCloser, totalSum, updateQuantity} = useContext(GoodsCartContext);

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
                            {goods.map(good => (
                                goods.length !== 0 ?
                                    <CartItem key={good.id} good={good} forDeleting={itemCloser}
                                              updateQuantity={updateQuantity}/> :
                                    <p>Корзина пуста</p>
                            ))}
                        </div>
                        <ul className="buttons">
                            <li className="buttons">
                                <Buttons style={{ backgroundColor: 'transparent', cursor: 'pointer' } }
                                         onClick={cartClearing} className="cart-button">Clear shopping cart</Buttons>
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
                                <p className="total__sub">SUB TOTAL&emsp;&emsp;${totalSum}</p>
                                <p className="total__grand">GRAND TOTAL&emsp;&emsp;
                                    <span className="total__grand_bold accent_text">${totalSum}</span>
                                </p>
                            </div>
                            <Buttons className="total__btn" type="submit">PROCEED TO CHECKOUT</Buttons>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Cart;