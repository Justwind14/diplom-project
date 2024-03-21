import React, {createContext, useEffect, useState} from "react";
import {toast, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export const GoodsCartContext = createContext({});

const ContextForCart = ({children}) => {
    const [goods, setGoods] = useState([]);
    const [totalSum, setTotalSum] = useState(0);


    const addGoods = (good) => {
        setGoods((prevState) => [...prevState, good]);

        toast.success('🦄 Товар успешно добавлен в корзину!', {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });

        // setGoods( (prevState) => [...prevState,{id: 1,
        //     title: 'ELLEREY X M\'O CAPSULE',
        //     body: 'Known for her sculptural takes on traditional tailoring,\n' +
        //         'Australian arbiter of cool Kym Ellerey teams up with Moda Operandi.',
        //     price: 52.00,
        //     imgName: 'product1.jpg',
        //     alt: 'goods1',
        //     size: 'XS',
        //     color: 'Red',
        //     quantity: 1,
        // }]);

    }

    const updateQuantity = (good, newQuantity) => {
        setGoods(
            goods.map(item => (item.id === good.id ?
                { ...item, quantity: newQuantity } :
                    item
            ))
        );
    };

    useEffect(() => {
        let sum = 0;
        for (const good of goods) {
            sum += (good.price * good.quantity);
        }
        setTotalSum(sum);
    }, [goods]);


    const itemCloser = (currentItem) => {
        setGoods(goods => goods.filter(good => good.id !== currentItem.id));
    }

    const cartClearing = () => {
        setGoods([])
    }


    return (
        <GoodsCartContext.Provider value={{goods, cartClearing, itemCloser, totalSum, updateQuantity, addGoods}}>
            <ToastContainer />
            {children}
        </GoodsCartContext.Provider>
    );
};

export default ContextForCart;