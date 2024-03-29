import {useContext} from 'react';
import {GoodsCartContext} from "../../context/ContextForCart";

const useAddToCart = () => {
    const { addGoods } = useContext(GoodsCartContext);

    return (goodsItem) => {
        const someGoods = {
            id: goodsItem.id,
            title: goodsItem.title,
            body: goodsItem.body,
            price: goodsItem.price,
            imgName: goodsItem.imgName,
            alt: goodsItem.alt,
            size: goodsItem.size,
            color: goodsItem.color,
            quantity: 1,
        };
        addGoods(someGoods);
    };
};

export default useAddToCart;