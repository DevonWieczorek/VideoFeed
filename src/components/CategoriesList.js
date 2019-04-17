import React from 'react';
import ParamLink from "./ParamLink";

const CategoriesList = () => {
    const renderLinks = () => {
        let links = [];
        let categories = require('../data/sample/categories.json');

        for(let c in categories['categories']){
            let category = categories['categories'][c].category.toLowerCase();
            links.push(
                <ParamLink className="nav-link border-bottom truncate" activeClassName="active" param="category" value={category}>{category}</ParamLink>
            );
        }

        return links;
    }

    return(
        <ul className="navbar-nav">{}
            {renderLinks()}
        </ul>
    );
}

export default CategoriesList;
