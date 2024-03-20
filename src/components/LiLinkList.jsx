import React from 'react';
import LiLinks from "./LiLinks";
import {Link} from "react-router-dom";

const LiLinkList = (props) => {
    return (
        <>
            <li><h3 className={props.className}>{props.title}</h3></li>
            <li>
                <ul className="burger-menu__section">
                    {
                        props.items.map((item) => (
                            props.title === item.title ?
                                <LiLinks key={item.id} item={item} classItem='burger-menu__item'/> :
                                props.title === item.title ?
                                    <LiLinks key={item.id} item={item} classItem='burger-menu__item'/> :
                                    props.title === item.title ?
                                        <LiLinks key={item.id} item={item} classItem='burger-menu__item'/> :
                                        console.log('категория не найдена')
                        ))
                    }
                </ul>
            </li>
        </>
    );
};

export default LiLinkList;