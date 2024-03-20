import React from 'react';

const LiDefault = (props) => {
    return (
        <li className={props.itemClassName}>
            {props.item.title}
        </li>
    );
};

export default LiDefault;