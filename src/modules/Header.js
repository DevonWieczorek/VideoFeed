import React from "react";
import { withRouter } from "react-router-dom";
import {MobileView, BrowserView} from "react-device-detect";
import Logo from "../components/Logo";
import MobileNav from "../components/MobileNav";
import Search from "../components/Search";
import PartnerLogo from "../components/PartnerLogo";

const Header = (props) => {
    let brand = props.match.params.brand || props.location.pathname.split('/')[1];
    return (
        <header className="super container-fluid">
            <MobileView viewClassName="mobile-nav">
                <MobileNav />
                <Search />
            </MobileView>
            <BrowserView>
                <Logo />
                {(brand) ? <PartnerLogo /> : <Search /> }
            </BrowserView>

        </header>
    );
};

export default withRouter(Header);
