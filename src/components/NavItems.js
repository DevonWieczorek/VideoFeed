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
                <li className="nav-item border-bottom active">
                    <NavLink to="/" className="nav-link truncate" activeClassName="active">
                        Home Feed
                    </NavLink>
                </li>
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
                            <ParamLink className="nav-link border-bottom truncate" activeClassName="active" param="category" value="sports">
                                Sports
                            </ParamLink>
                            <ParamLink className="nav-link border-bottom truncate"activeClassName="active"  param="category" value="comedy">
                                Comedy
                            </ParamLink>
                            <ParamLink className="nav-link border-bottom truncate" activeClassName="active" param="category" value="action">
                                Action
                            </ParamLink>
                            <ParamLink className="nav-link border-bottom truncate" activeClassName="active" param="category" value="live">
                                Live
                            </ParamLink>
                        </ul>
                    </CollapsiblePanel>
                </li>
            </ul>
        </>
    );
}

export default NavItems;
