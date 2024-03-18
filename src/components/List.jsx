import React from 'react';
import ItemOfList from "./ItemOfList";

const List = (props) => {
    return (
        <ul className={props.className}>
            {props.items.map((item, index) => (
                <ItemOfList
                    key={index+1}
                    item={item}
                    itemClassName={props.itemClassName}
                />
            ))}
        </ul>
    );
};

export default List;