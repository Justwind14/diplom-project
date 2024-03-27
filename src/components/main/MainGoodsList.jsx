import React from 'react';
import MainGoodsItem from "./MainGoodsItem";

const MainGoodsList = (props) => {
    return (
        <>
            {/*тут мы создаем новый массив с ограничением количества товаров props.itemCount*/}
            {props.goods.slice(0, props.itemCount).map((good) => (
                <MainGoodsItem key={good.id} good={good}/>
            ))
            }
        </>
    );
};

export default MainGoodsList;