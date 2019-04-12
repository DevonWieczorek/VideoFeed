import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Route, Switch, withRouter } from "react-router-dom";
import queryString from 'query-string';
import Feed from '../pages/Feed';
import NotFound from '../pages/NotFound';
import ErrorBoundary from '../components/ErrorBoundary';
import {updateAllBrandInfo, updateActiveBrand} from '../actions';
import {DEFAULT_BRAND} from '../actions/types';

class Routing extends Component {
    // Listen for changes in the URL params and update the state accordingly
    onRouteChanged(){
        let {match, location} = this.props;
        let urlParams = queryString.parse(this.props.location.search);

        this.props.updateAllBrandInfo({
            activeBrand: match.params.brand || location.pathname.split('/')[1] || DEFAULT_BRAND,
            page: urlParams['page'] || 1,
            search: urlParams['search'] || '',
            category: urlParams['category'] || '',
            queryString: location.search || ''
        });
        this.props.updateActiveBrand(match.params.brand || location.pathname.split('/')[1] || DEFAULT_BRAND)
    }

    componentDidUpdate(prevProps) {
        if (this.props.location !== prevProps.location) {
            this.onRouteChanged();
        }
    }

    componentDidMount(){
        this.onRouteChanged();
    }

    render(){
        return(
            <Switch>
                <Route exact path="/" key="homeFeed" component={() => {
                    return(
                        <ErrorBoundary errorContent={<NotFound/>}>
                            <Feed />
                        </ErrorBoundary>
                    );
                }} />
                <Route path="/:brand" key="brand" component={() => {
                    return(
                        <ErrorBoundary errorContent={<NotFound/>}>
                            <Feed />
                        </ErrorBoundary>
                    );
                }} />
                <Route key="404" component={NotFound} />
            </Switch>
        );
    }
}

const mapStateToProps = (state) => {
    return{ ...state.brands};
}

export default connect(mapStateToProps, {updateAllBrandInfo, updateActiveBrand})(withRouter(Routing));
