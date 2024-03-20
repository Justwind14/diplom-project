import React from 'react';
import {Link} from "react-router-dom";

const LiLinks = (props) => {
    return (
        <li className={props.classItem}><Link className={props.item.classNm}
            to={props.item.linkPath}>{props.item.itemTitle}</Link>
        </li>
    );
};

export default LiLinks;