import React from 'react';
import {Link} from "react-router-dom";

const CatalogDetailItem = (props) => {
    return (
        <Link to="#" className="filter__link">{props.detailItem.kindOf}</Link>
    );
};

export default CatalogDetailItem;