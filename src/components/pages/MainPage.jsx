import React from 'react';
import MainTop from "../Main/MainTop";
import MainOffer from "../Main/MainOffer";
import Advantage from "../Main/Advantage";
import MainGoods from "../Main/MainGoods";

const MainPage = () => {
    return (
        <div className="main">
            <MainTop/>
            <MainOffer/>
            <MainGoods/>
            <Advantage/>
        </div>
    );
};

export default MainPage;