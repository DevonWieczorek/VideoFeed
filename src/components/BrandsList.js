import React from 'react';
import { NavLink } from "react-router-dom";

const BrandsList = () => {
    const renderLinks = () => {
        let links = [];
        let brands = require('../data/sample/brands.json');

        for(let b in brands['brands']){
            let brand = brands['brands'][b].brand;
            links.push(
                <NavLink to={`/${brand}`} className="nav-link border-bottom truncate" activeClassName="active">{brand}</NavLink>
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

export default BrandsList;
