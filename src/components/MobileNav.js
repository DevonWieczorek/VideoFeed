import React from 'react';
import NavItems from './NavItems';

const MobileNav = () => {
    return (
        <nav className="navbar">

            <a className="home-button" href="#">
                <div id="logo"> Clean UI </div>
            </a>

            <button className="navbar-toggler toggler-example" type="button" data-toggle="collapse" data-target="#navbarSupportedContent1" aria-controls="navbarSupportedContent1" aria-expanded="false" aria-label="Toggle navigation">
                <span className="dark-blue-text">
                    <i className="fas fa-bars fa-1x"></i>
                </span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent1">
                <NavItems />
            </div>

        </nav>
    );
}

export default MobileNav;
