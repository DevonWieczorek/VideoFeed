import React from "react";
import {MobileView, BrowserView} from "react-device-detect";
import MobileNav from "./MobileNav";
import Search from "./Search";

const Header = () => {
    return (
        <header className="super container-fluid">
            <MobileView viewClassName="mobile-nav">
                <MobileNav />
            </MobileView>
            <BrowserView>
                <div id="logo"> Clean UI </div>
            </BrowserView>
            <Search />
        </header>
    );
};

export default Header;
