import React, {useContext} from 'react';

const ItemOfList = (props) => {

    return (
        <li className={props.itemClassName}>
            {props.item}
        </li>
    );
};

export default ItemOfList;