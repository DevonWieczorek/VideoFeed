import React, {Component} from 'react';
import {connect} from 'react-redux';
import {BrowserView} from "react-device-detect";
import { NavLink, withRouter } from "react-router-dom";
import Search from "./Search";
import BrandsList from "./BrandsList";
import CategoriesList from "./CategoriesList";
import CollapsiblePanel from "./CollapsiblePanel";
import ErrorBoundary from "./ErrorBoundary";
import { getCategoriesByBrand } from '../actions';

class NavItems extends Component {

    render(){
        return(
            <>
                <BrowserView>
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item border-bottom">
                            <ErrorBoundary><Search /></ErrorBoundary>
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
                            <ErrorBoundary errorContent={<em>Error finding brands.</em>}>
                                <BrandsList />
                            </ErrorBoundary>
                        </CollapsiblePanel>
                    </li>
                    <li className="nav-item border-bottom truncate">
                        <CollapsiblePanel
                            id="categories-accordion"
                            title="Categories"
                        >
                            <ErrorBoundary errorContent={<em>Error finding categories.</em>}>
                                <CategoriesList categories={
                                    this.props.providers[this.props.activeBrand].allCategories
                                }/>
                            </ErrorBoundary>
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
