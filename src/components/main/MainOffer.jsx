import React from 'react';
import {Link} from "react-router-dom";
import MainOfferCard from "./MainOfferCard";

const MainOffer = () => {
    const offerCards = [
        {
            title: 'FOR WOMEN',
            description: '30% OFF',
            imgName: 'offer1.png',
            alt: "fashion woman",
        },
        {
            title: 'FOR MEN',
            description: 'HOT DEAL',
            imgName: 'offer2.png',
            alt: "fashion man",
        },
        {
            title: 'FOR KIDS',
            description: 'NEW ARRIVALS',
            imgName: 'offer3.png',
            alt: "fashion kids",
        },
        {
            title: 'ACCESSORIES',
            description: 'LUXURIOUS & TRENDY',
            imgName: 'offer_large.png',
            alt: "fashion all",
        },
    ]
    return (
        <div className="center">
            <section className="offer">
                <h2 className="hidden">Offers</h2>
                {offerCards.map((offerCard, index) => (
                    <MainOfferCard
                        key={index + 1}
                        offerCard={offerCard}
                    />
                ))}
            </section>
        </div>
    );
};

export default MainOffer;