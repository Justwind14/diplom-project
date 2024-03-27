import React from 'react';
import List from "../List";
import {Link} from "react-router-dom";

const HeaderLeft = () => {
    const items = [
        <Link className="menu__link" to="/">
            <img className="menu__logo-img" src={require('../../img/logo.png')} alt="logo"/>
        </Link>,
    ]

    return (
        <div className="header__left">
            <List
                className="menu-left"
                items={items}
                ItemClassName="menu-left__item">
            </List>
        </div>
    );
};

export default HeaderLeft;