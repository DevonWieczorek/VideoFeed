import React from 'react';
import {BrowserView} from "react-device-detect";
import Search from "./Search";

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
                    <a className="nav-link" href="#">Nav 1</a>
                </li>
                <li className="nav-item border-bottom">
                    <a className="nav-link" href="#">Nav 2</a>
                </li>
                <li className="nav-item border-bottom">
                    <a className="nav-link" href="#">Nav 3</a>
                </li>
                <li className="nav-item border-bottom">
                    <a className="nav-link" href="#">Nav 4</a>
                </li>
                <li className="nav-item border-bottom">
                    <a className="nav-link" href="#">Nav 5</a>
                </li>
            </ul>
        </>
    );
}

export default NavItems;
