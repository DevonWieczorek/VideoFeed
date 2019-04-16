import React from 'react';
import {BrowserView} from "react-device-detect";
import { NavLink } from "react-router-dom";
import Search from "./Search";
import ParamLink from "./ParamLink";
import BrandsList from "./BrandsList";
import CategoriesList from "./CategoriesList";
import CollapsiblePanel from "./CollapsiblePanel";

const NavItems = () => {
    return(
        <>
            <BrowserView>
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item border-bottom">
                        <Search />
                    </li>
                </ul>
            </BrowserView>
            <ul className="navbar-nav mr-auto">
                <li className="nav-item border-bottom">
                    <NavLink to="/" className="nav-link truncate" activeClassName="default">
                        Home Feed
                    </NavLink>
                </li>
                <li className="nav-item border-bottom truncate">
                    <CollapsiblePanel
                        id="brands-accordion"
                        title="Brands"
                    >
                        <BrandsList />
                    </CollapsiblePanel>
                </li>
                <li className="nav-item border-bottom truncate">
                    <CollapsiblePanel
                        id="categories-accordion"
                        title="Categories"
                    >
                        <CategoriesList />
                    </CollapsiblePanel>
                </li>
            </ul>
        </>
    );
}

export default NavItems;
