import React from "react";
import {MobileView, BrowserView} from "react-device-detect";
import MobileNav from "./MobileNav";

const Header = () => {
    return (
        <header className="super container-fluid">
            <MobileView viewClassName="mobile-nav">
                <MobileNav />
            </MobileView>
            <BrowserView>
                <div id="logo"> Clean UI </div>
            </BrowserView>
        </header>
    );
};

export default Header;
