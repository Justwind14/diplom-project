import React from 'react';

const LeftSideSubscribe = () => {
    return (
        <figure className="subscribe__quote">
            <img src={require("../../img/subscribe.png")} alt="smiling woman" className="subscribe__quote-img"/>
            <p className="subscribe__text">
                “Vestibulum quis porttitor dui! Quisque viverra nunc mi,
                <span className="text_italic">a pulvinar purus condimentum“</span>
            </p>
        </figure>
    );
};

export default LeftSideSubscribe;