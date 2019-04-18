import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Route, Switch, withRouter } from "react-router-dom";
import queryString from 'query-string';
import Feed from '../pages/Feed';
import NotFound from '../pages/NotFound';
import ErrorBoundary from '../components/ErrorBoundary';
import ResultsBanner from '../components/ResultsBanner';
import {getURLParam} from "../utils/url";
import {
    updateAllBrandInfo,
    updateActiveBrand,
    updateBrandAttribute,
    getCategoriesByBrand,
    searchByQuery,
    searchByCategory,
    searchByBrandDefault
} from '../actions';
import {DEFAULT_BRAND} from '../actions/types';

class Routing extends Component {
    // Listen for changes in the URL params and update the state accordingly
    onRouteChanged = () =>{
        let {match, location} = this.props;
        let urlParams = queryString.parse(this.props.location.search);
        let activeBrand = match.params.brand || location.pathname.split('/')[1] || DEFAULT_BRAND;

        // Update the global brand info
        this.props.updateAllBrandInfo({
            activeBrand: activeBrand,
            page: urlParams['page'] || 1,
            search: urlParams['search'] || '',
            category: urlParams['category'] || '',
            queryString: location.search || ''
        });

        // Update the active brand
        this.props.updateActiveBrand(activeBrand);

        console.log('The new active brand is: ', activeBrand);

        // Check if we need to fetch the categories list
        this.handleCategories(activeBrand);
    }

    // Populate the feed with initial search results
    delegateSearch = () => {
        // If search results are already in state then skip
        if(this.props.api.searchResults) return;

        let brand = this.props.brands.activeBrand;
        let query = getURLParam(this.props, 'q');
        let category = getURLParam(this.props, 'category');

        if(query){
            // Search by brand and full query string
            // (May also include category, brand, and page)
            this.props.searchByQuery(brand, this.props.location.search);
        }
        else if(category){
            //searchByCategory
            this.props.searchByCategory(brand, category);
        }
        else{
            //searchByBrandDefault
            this.props.searchByBrandDefault(brand);
        }
    }

    handleCategories = (brand) => {
        brand = brand || this.props.providers[this.props.activeBrand];
        let categories = brand.allCategories;

        // If there are no categories, fetch and populate
        if(!categories || categories.length === 0){
            this.props.getCategoriesByBrand(brand);
        }
    }

    componentDidUpdate(prevProps) {
        if (this.props.location !== prevProps.location) {
            this.onRouteChanged();
        }
    }

    componentDidMount(){
        this.delegateSearch();
        this.onRouteChanged();
    }

    render(){
        return(
            <Switch>
                <Route exact path="/" key="homeFeed" component={() => {
                    return(
                        <ErrorBoundary errorContent={<NotFound/>}>
                            <ResultsBanner />
                            <Feed results={this.props.api.searchResults} />
                        </ErrorBoundary>
                    );
                }} />
            <Route exact path="/404" key="404page" component={NotFound} />
                <Route path="/:brand" key="brand" component={() => {
                    return(
                        <ErrorBoundary errorContent={<NotFound/>}>
                            <ResultsBanner />
                            <Feed results={this.props.api.searchResults} />
                        </ErrorBoundary>
                    );
                }} />
            <Route key="404fallback" component={NotFound} />
            </Switch>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        brands: state.brands,
        api: state.api
    };
}

export default connect(mapStateToProps, {
    updateAllBrandInfo,
    updateActiveBrand,
    updateBrandAttribute,
    getCategoriesByBrand,
    searchByQuery,
    searchByCategory,
    searchByBrandDefault
})(withRouter(Routing));
