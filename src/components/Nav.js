import React from 'react';
import {BrowserView} from "react-device-detect";
import NavItems from './NavItems';

const Nav = () => {
    return(
        <BrowserView viewClassName="siderail-nav nav-left col-lg-2 col-xl-2 float-left border-right">
            <nav className="navbar web-nav">
                <NavItems />
            </nav>
        </BrowserView>
    );
}

export default Nav;
