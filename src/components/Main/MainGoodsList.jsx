import React, {useContext} from 'react';
import MainGoodsItem from "./MainGoodsItem";

const MainGoodsList = (props) => {
    const partOfGoods = props.itemCount;
    return (
        <>
            {props.goods.map((good) => (
                good.id < partOfGoods ?
                <MainGoodsItem key={good.id} good={good}/> :
                    console.log("часть товаров выведена")
            ))
            }
        </>
    );
};

export default MainGoodsList;