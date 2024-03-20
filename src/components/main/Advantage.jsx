import React from 'react';
import AdvantageCard from "./AdvantageCard";

const Advantage = () => {
    const advantages = [
        {
            title: 'Free Delivery',
            body: 'Worldwide delivery on all. Authoritatively morph next-generation\n' +
                '                            innovation\n' +
                '                            with extensive models.',
            imagePath: 'advantages_img1.svg',
            alt: "car_icon",
        },
        {
            title: 'Sales & discounts',
            body: 'Worldwide delivery on all. Authoritatively morph next-generation\n' +
                '                            innovation\n' +
                '                            with extensive models.',
            imagePath: 'advantages_img2.svg',
            alt: "car_icon",
        },
        {
            title: 'Quality assurance',
            body: 'Worldwide delivery on all. Authoritatively morph next-generation\n' +
                '                            innovation\n' +
                '                            with extensive models.',
            imagePath: 'advantages_img3.svg',
            alt: "car_icon",
        },
    ]
    return (
        <section className="features-wrapper center">
            <div className="features">
                {advantages.map((advantage, index) => (
                        <AdvantageCard
                            key={index}
                            advantage={advantage}
                        />
                    ))}
            </div>
        </section>
    );
};

export default Advantage;