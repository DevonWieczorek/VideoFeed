import React from 'react';
import Feed from '../pages/Feed';
import NotFound from '../pages/NotFound';
import ErrorBoundary from '../components/ErrorBoundary';
import { Route, Switch } from "react-router-dom";

const Routing = () => {
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

export default Routing;
