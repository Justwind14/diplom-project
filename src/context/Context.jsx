import React, {createContext, useContext, useState} from 'react';
import MainGoodsList from "../components/main/MainGoodsList";

export const GoodsContext = createContext(undefined);

const Context = ({ children }) => {
    const [goodis, setGoods] = useState([
            {id: 1, title: 'ELLEREY X M\'O CAPSULE',
                body: 'Known for her sculptural takes on traditional tailoring,\n' +
                    'Australian arbiter of cool Kym Ellerey teams up with Moda Operandi.',
                price: 52.00,
                imgName: 'product1.jpg',
                alt: 'goods1'
            },
            {id: 2, title: 'ELLEREY X M\'O CAPSULE',
                body: 'Known for her sculptural takes on traditional tailoring,\n' +
                    'Australian arbiter of cool Kym Ellerey teams up with Moda Operandi.',
                price: 42.00,
                imgName: 'product2.png',
                alt: 'goods2'
            },
            {id: 3, title: 'ELLEREY X M\'O CAPSULE',
                body: 'Known for her sculptural takes on traditional tailoring,\n' +
                    'Australian arbiter of cool Kym Ellerey teams up with Moda Operandi.',
                price: 32.00,
                imgName: 'product3.png',
                alt: 'goods3'
            },
            {id: 4, title: 'ELLEREY X M\'O CAPSULE',
                body: 'Known for her sculptural takes on traditional tailoring,\n' +
                    'Australian arbiter of cool Kym Ellerey teams up with Moda Operandi.',
                price: 22.00,
                imgName: 'product4.png',
                alt: 'goods4'
            },
            {id: 5, title: 'ELLEREY X M\'O CAPSULE',
                body: 'Known for her sculptural takes on traditional tailoring,\n' +
                    'Australian arbiter of cool Kym Ellerey teams up with Moda Operandi.',
                price: 12.00,
                imgName: 'product5.png',
                alt: 'goods5'
            },
            {id: 6, title: 'ELLEREY X M\'O CAPSULE',
                body: 'Known for her sculptural takes on traditional tailoring,\n' +
                    'Australian arbiter of cool Kym Ellerey teams up with Moda Operandi.',
                price: 62.00,
                imgName: 'product6.png',
                alt: 'goods6'
            },
            {id: 7, title: 'ELLEREY X M\'O CAPSULE',
                body: 'Known for her sculptural takes on traditional tailoring,\n' +
                    'Australian arbiter of cool Kym Ellerey teams up with Moda Operandi.',
                price: 82.00,
                imgName: 'product7.png',
                alt: 'goods7'
            },
            {id: 8, title: 'ELLEREY X M\'O CAPSULE',
                body: 'Known for her sculptural takes on traditional tailoring,\n' +
                    'Australian arbiter of cool Kym Ellerey teams up with Moda Operandi.',
                price: 72.00,
                imgName: 'product8.png',
                alt: 'goods8'
            },
            {id: 9, title: 'ELLEREY X M\'O CAPSULE',
                body: 'Known for her sculptural takes on traditional tailoring,\n' +
                    'Australian arbiter of cool Kym Ellerey teams up with Moda Operandi.',
                price: 92.00,
                imgName: 'product9.png',
                alt: 'goods9'
            },
        ]
    );

    return (
        <GoodsContext.Provider value={goodis}>
            {children}
        </GoodsContext.Provider>
    );
};


export default Context;