import React from 'react';
import {BrowserView} from "react-device-detect";
import { NavLink } from "react-router-dom";
import Search from "./Search";
import ParamLink from "./ParamLink";
import CollapsiblePanel from "./CollapsiblePanel";

const NavItems = () => {
    return(
        <>
            <BrowserView>
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item border-bottom active">
                        <Search />
                    </li>
                </ul>
            </BrowserView>
            <ul className="navbar-nav mr-auto">
                <li className="nav-item border-bottom truncate">
                    <CollapsiblePanel
                        id="brands-accordion"
                        title="Brands"
                    >
                        <ul className="navbar-nav">
                            <NavLink to="/youtube" className="nav-link border-bottom truncate" activeClassName="active">Youtube</NavLink>
                            <NavLink to="/vimeo" className="nav-link border-bottom truncate" activeClassName="active">Vimeo</NavLink>
                            <NavLink to="/twitch" className="nav-link border-bottom truncate" activeClassName="active">Twitch</NavLink>
                        </ul>
                    </CollapsiblePanel>
                </li>
                <li className="nav-item border-bottom truncate">
                    <CollapsiblePanel
                        id="categories-accordion"
                        title="Categories"
                    >
                        <ul className="navbar-nav">
                            <ParamLink className="nav-link border-bottom truncate" param="category" value="sports">Sports</ParamLink>
                            <ParamLink className="nav-link border-bottom truncate" param="category" value="comedy">Comedy</ParamLink>
                            <ParamLink className="nav-link border-bottom truncate" param="category" value="action">Action</ParamLink>
                            <ParamLink className="nav-link border-bottom truncate" param="category" value="live">Live</ParamLink>
                        </ul>
                    </CollapsiblePanel>
                </li>
                <li className="nav-item border-bottom active">
                    <NavLink to="/" className="nav-link truncate" activeClassName="active">Nav 1</NavLink>
                </li>
                <li className="nav-item border-bottom">
                    <NavLink to="/" className="nav-link truncate" activeClassName="active">
                        Nav 2 with very very very long name goes here
                    </NavLink>
                </li>
                <li className="nav-item border-bottom">
                    <NavLink to="/" className="nav-link" activeClassName="active">
                        Nav 3 also has a very very long name but wraps instead
                    </NavLink>
                </li>
                <li className="nav-item border-bottom truncate">
                    <CollapsiblePanel
                        id="subnav1"
                        title="Nav with Subnav"
                    >
                        <ul className="navbar-nav">
                            <NavLink to="/" className="nav-link border-bottom truncate" activeClassName="active">Sub 1</NavLink>
                            <NavLink to="/" className="nav-link border-bottom truncate" activeClassName="active">Sub 2</NavLink>
                            <NavLink to="/" className="nav-link border-bottom truncate" activeClassName="active">Sub 3 Has a very long name</NavLink>
                        </ul>
                    </CollapsiblePanel>
                </li>
                <li className="nav-item border-bottom">
                    <NavLink to="/" className="nav-link truncate" activeClassName="active">Sub 1</NavLink>
                </li>
            </ul>
        </>
    );
}

export default NavItems;
