import React from 'react';
import HeaderLeft from "./HeaderLeft";
import HeaderRight from "./HeaderRight";

const Header = () => {

    return (
        <header id="home" className="header center">
            <HeaderLeft/>
            <HeaderRight/>
        </header>
    );
};

export default Header;