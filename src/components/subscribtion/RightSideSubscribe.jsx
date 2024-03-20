import React from 'react';
import SubscribtionForm from "./SubscribeForm";

const RightSideSubscribe = () => {
    return (
        <div className="subscribe__form">
            <p className="subscribe__title">SUBSCRIBE</p>
            <p className="subscribe__desc">FOR OUR NEWSLETTER AND PROMOTION</p>
            <SubscribtionForm />
        </div>
    );
};

export default RightSideSubscribe;