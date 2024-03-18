import React from 'react';

const AdvantageCard = (props) => {
    return (
        <div className="features__card">
            <img className="features__img" src={require("../../img/" + props.advantage.imagePath)}
                 alt={props.advantage.alt}/>
            <div className="features__content">
                <h3 className="features__title">{props.advantage.title}</h3>
                <p className="features__text">{props.advantage.body}</p>
            </div>
        </div>
    );
};

export default AdvantageCard;