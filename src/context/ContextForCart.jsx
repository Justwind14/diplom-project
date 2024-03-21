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
    }


    const updateQuantity = (good, newQuantity) => {
        setGoods(
            goods.map(item => (item.id === good.id ?
                { ...item, quantity: newQuantity } :
                    item
            ))
        );
    };


    const itemCloser = (currentItem) => {
        setGoods(goods => goods.filter(good => good.id !== currentItem.id));
    }

    const cartClearing = () => {
        setGoods([])
    }

    useEffect(() => {
        let sum = 0;
        for (const good of goods) {
            sum += (good.price * good.quantity);
        }
        setTotalSum(sum);
    }, [goods]);



    return (
        <GoodsCartContext.Provider value={{goods, addGoods, cartClearing, itemCloser, totalSum, updateQuantity}}>
            <ToastContainer />
            {children}
        </GoodsCartContext.Provider>
    );
};

export default ContextForCart;