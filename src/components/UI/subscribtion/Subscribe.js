import React from 'react';
import LeftSideSubscribe from "./LeftSideSubscribe";
import RightSideSubscribe from "./RightSideSubscribe";

const Subscribe = () => {
    return (
        <section className="subscribe">
            <h2 className="hidden">Subscribe</h2>
            <div className="subscribe-bg">
                <div className="subscribe__content">
                    <LeftSideSubscribe/>
                    <RightSideSubscribe/>
                </div>
            </div>
        </section>
    );
};

export default Subscribe;