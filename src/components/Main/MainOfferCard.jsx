import React from 'react';
import {Link} from "react-router-dom";

const MainOfferCard = (props) => {
    return (
        <div className = "offer__card">
            <Link to="catalog.html" className="offer__link">
                <img src={require("../../img/" + props.offerCard.imgName)} alt={props.offerCard.alt} className="offer__img"/>
                <div className="offer__filter">
                    <p className="offer__desc">{props.offerCard.description}</p>
                    <h3 className="offer__title">{props.offerCard.title}</h3>
                </div>
            </Link>
        </div>
    );
};

export default MainOfferCard;