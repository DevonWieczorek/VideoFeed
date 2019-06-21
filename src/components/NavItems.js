import React, {Component} from 'react';
import {connect} from 'react-redux';
import {BrowserView} from "react-device-detect";
import { NavLink, withRouter } from "react-router-dom";
import Search from "./Search";
import BrandsList from "./BrandsList";
import CategoriesList from "./CategoriesList";
import CollapsiblePanel from "./CollapsiblePanel";
import { getCategoriesByBrand } from '../actions';

// TODO: Wrap nav items in error boundary 
class NavItems extends Component {

    render(){
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
                            <CategoriesList categories={
                                this.props.providers[this.props.activeBrand].allCategories
                            }/>
                        </CollapsiblePanel>
                    </li>
                </ul>
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return{ ...state.brands};
}

export default connect(mapStateToProps, {getCategoriesByBrand})(withRouter(NavItems));
