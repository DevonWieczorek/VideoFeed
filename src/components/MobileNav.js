import React from 'react';
import Logo from "./Logo";
import NavItems from './NavItems';

const MobileNav = () => {
    return (
        <nav className="navbar">

            <Logo />

            <button className="navbar-toggler border-top border-bottom over-5" type="button" data-toggle="collapse" data-target="#navbarSupportedContent1" aria-controls="navbarSupportedContent1" aria-expanded="false" aria-label="Toggle navigation"></button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent1">
                <NavItems />
            </div>

        </nav>
    );
}

export default MobileNav;
