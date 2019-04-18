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
            search: urlParams['q'] || '',
            category: urlParams['category'] || '',
            queryString: location.search || ''
        });

        // Update the active brand
        this.props.updateActiveBrand(activeBrand);

        // Check if we need to fetch the categories list
        this.handleCategories(activeBrand);

        // Wait until all brand info has been updated, then
        // Search for results to populate the feed
        this.delegateSearch(activeBrand, urlParams['q'], urlParams['category']);
    }

    // Decide what kind of search to perform based on url params
    delegateSearch = (brand, query, category) => {
        brand = brand || this.props.brands.activeBrand;
        query = query || getURLParam(this.props, 'q');
        category = category || getURLParam(this.props, 'category');

        if(query){
            console.log('search by query: ', brand, this.props.location.search);
            // Search by brand and full query string
            // (May also include category and page)
            this.props.searchByQuery(brand, this.props.location.search);
        }
        else if(category){
            console.log('search by category: ', brand, category);
            // Search by brand and category
            this.props.searchByCategory(brand, category);
        }
        else{
            console.log('search by brand default: ', brand);
            // If no results exist in state then
            // call the API and get default search
            // results by brand
            this.props.searchByBrandDefault(brand);
        }
    }

    // Fetch a list of categories to search based on brand
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
        console.log('Router props: ', this.props);
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
