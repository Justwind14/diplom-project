import React from 'react';
import LiDefault from "../LiDefault";

const RegistrationLoyalty = () => {
    const loyalties = [
        {id: 1, title: '15% off welcome offer'},
        {id: 2, title: 'Free shipping, returns and exchanges on all orders'},
        {id: 3, title: '$10 off a purchase on your birthday'},
        {id: 4, title: 'Early access to products'},
        {id: 5, title: 'Exclusive offers & rewards'},
    ]

    return (
        <div className="loyalty">
            <div className="loyalty__title">LOYALTY HAS ITS PERKS</div>
            <div className="loyalty__text">Get in on the loyalty program where you can earn points and unlock
                serious perks. Starting with these as soon as you join:
            </div>
            <ul className="loyalty__list">
                {
                    loyalties.map((loyalty) => (
                        <LiDefault key={loyalty.id} item={loyalty} itemClassName="loyalty__item"/>
                    ))
                }
            </ul>
        </div>
    );
};

export default RegistrationLoyalty;