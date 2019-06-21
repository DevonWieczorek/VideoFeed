import React from 'react';
import ParamLink from "./ParamLink";

// TODO: Error handling for bad responses 
const CategoriesList = (props) => {
    const renderLinks = () => {
        let links = [];

        for(let c in props.categories){
            let category = props.categories[c].category.toLowerCase();
            links.push(
                <ParamLink className="nav-link border-bottom truncate" activeClassName="active" param="category" key={c} value={category}>{category}</ParamLink>
            );
        }

        if(links.length === 0) links = <i style={{'fontSize': '12px'}}>No Categories Found.</i>;
        return links;
    }

    return( <ul className="navbar-nav"> {renderLinks()} </ul> );
}

export default CategoriesList;
