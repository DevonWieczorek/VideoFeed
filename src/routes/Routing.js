import React from 'react';
import Feed from '../pages/Feed';
import NotFound from '../pages/NotFound';
import { Route, Switch } from "react-router-dom";

const Routing = () => {
    return(
        <Switch>
            <Route exact path="/" key="/-Feed" component={Feed} />
            <Route path="/:subdir" key="/:subdir-Feed"component={Feed} />
            <Route key="404" component={NotFound} />
        </Switch>
    );
}

export default Routing;
