import React from 'react';

const RightSideSubscribe = () => {
    return (
        <div className="subscribe__form">
            <p className="subscribe__title">SUBSCRIBE</p>
            <p className="subscribe__desc">FOR OUR NEWSLETTER AND PROMOTION</p>
            {/*форму нужно еще в компонент*/}
            <form className="subscribe__email-form" action="#">
                <label className="hidden" htmlFor="email">Email input</label>
                <input id="email" className="subscribe__email-input" type="email"
                       placeholder="Enter Your Email"/>
                <input value="Subscribe" className="subscribe__email-btn" type="button"/>
            </form>
        </div>
    );
};

export default RightSideSubscribe;