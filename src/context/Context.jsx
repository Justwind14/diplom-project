import React, {createContext, useState} from 'react';

export const GoodsContext = createContext();

const Context = ({ children }) => {
    const [goods, setGoods] = useState([
        {id: 1, title: 'ELLEREY X M\'O CAPSULE',
            body: 'Known for her sculptural takes on traditional tailoring,\n' +
                'Australian arbiter of cool Kym Ellerey teams up with Moda Operandi.',
            price: 52.00,
            imgName: 'product1.jpg',
            alt: 'goods1',
            size: 'XS',
            color: 'Red',
        },
        {id: 2, title: 'ELLEREY X M\'O CAPSULE',
            body: 'Known for her sculptural takes on traditional tailoring,\n' +
                'Australian arbiter of cool Kym Ellerey teams up with Moda Operandi.',
            price: 42.00,
            imgName: 'product2.png',
            alt: 'goods2',
            size: 'XS',
            color: 'White',
        },
        {id: 3, title: 'ELLEREY X M\'O CAPSULE',
            body: 'Known for her sculptural takes on traditional tailoring,\n' +
                'Australian arbiter of cool Kym Ellerey teams up with Moda Operandi.',
            price: 32.00,
            imgName: 'product3.png',
            alt: 'goods3',
            size: 'S',
            color: 'Blue',
        },
        {id: 4, title: 'ELLEREY X M\'O CAPSULE',
            body: 'Known for her sculptural takes on traditional tailoring,\n' +
                'Australian arbiter of cool Kym Ellerey teams up with Moda Operandi.',
            price: 22.00,
            imgName: 'product4.png',
            alt: 'goods4',
            size: 'S',
            color: 'Blue',
        },
        {id: 5, title: 'ELLEREY X M\'O CAPSULE',
            body: 'Known for her sculptural takes on traditional tailoring,\n' +
                'Australian arbiter of cool Kym Ellerey teams up with Moda Operandi.',
            price: 12.00,
            imgName: 'product5.png',
            alt: 'goods5',
            size: 'M',
            color: 'Blue',
        },
        {id: 6, title: 'ELLEREY X M\'O CAPSULE',
            body: 'Known for her sculptural takes on traditional tailoring,\n' +
                'Australian arbiter of cool Kym Ellerey teams up with Moda Operandi.',
            price: 62.00,
            imgName: 'product6.png',
            alt: 'goods6',
            size: 'M',
            color: 'Green',
        },
        {id: 7, title: 'ELLEREY X M\'O CAPSULE',
            body: 'Known for her sculptural takes on traditional tailoring,\n' +
                'Australian arbiter of cool Kym Ellerey teams up with Moda Operandi.',
            price: 82.00,
            imgName: 'product7.png',
            alt: 'goods7',
            size: 'L',
            color: 'Green',
        },
        {id: 8, title: 'ELLEREY X M\'O CAPSULE',
            body: 'Known for her sculptural takes on traditional tailoring,\n' +
                'Australian arbiter of cool Kym Ellerey teams up with Moda Operandi.',
            price: 72.00,
            imgName: 'product8.png',
            alt: 'goods8',
            size: 'L',
            color: 'Black',
        },
        {id: 9, title: 'ELLEREY X M\'O CAPSULE',
            body: 'Known for her sculptural takes on traditional tailoring,\n' +
                'Australian arbiter of cool Kym Ellerey teams up with Moda Operandi.',
            price: 92.00,
            imgName: 'product9.png',
            alt: 'goods9',
            size: 'L',
            color: 'White',
        },
        {id: 10, title: 'ELLEREY X M\'O CAPSULE',
            body: 'Known for her sculptural takes on traditional tailoring,\n' +
                'Australian arbiter of cool Kym Ellerey teams up with Moda Operandi.',
            price: 32.00,
            imgName: 'product9.png',
            alt: 'goods9',
            size: 'M',
            color: 'White',
        },
        {id: 11, title: 'ELLEREY X M\'O CAPSULE',
            body: 'Known for her sculptural takes on traditional tailoring,\n' +
                'Australian arbiter of cool Kym Ellerey teams up with Moda Operandi.',
            price: 42.00,
            imgName: 'product6.png',
            alt: 'goods6',
            size: 'S',
            color: 'Black',
        },
        {id: 12, title: 'ELLEREY X M\'O CAPSULE',
            body: 'Known for her sculptural takes on traditional tailoring,\n' +
                'Australian arbiter of cool Kym Ellerey teams up with Moda Operandi.',
            price: 42.00,
            imgName: 'product3.png',
            alt: 'goods3',
            size: 'S',
            color: 'Black',
        },
        {id: 13, title: 'ELLEREY X M\'O CAPSULE',
            body: 'Known for her sculptural takes on traditional tailoring,\n' +
                'Australian arbiter of cool Kym Ellerey teams up with Moda Operandi.',
            price: 22.00,
            imgName: 'product4.png',
            alt: 'goods4',
            size: 'XS',
            color: 'Green',
        },
        {id: 14, title: 'ELLEREY X M\'O CAPSULE',
            body: 'Known for her sculptural takes on traditional tailoring,\n' +
                'Australian arbiter of cool Kym Ellerey teams up with Moda Operandi.',
            price: 92.00,
            imgName: 'product2.png',
            alt: 'goods2',
            size: 'L',
            color: 'White',
        },
    ]);

    return (
        <GoodsContext.Provider value={goods}>
            {children}
        </GoodsContext.Provider>
    );
};

export default Context;