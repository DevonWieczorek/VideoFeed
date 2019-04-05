import React from 'react';
import Feed from "../pages/Feed";
import { Route, Switch } from "react-router-dom";

const Routing = () => {
    return(
        <Switch>
            <Route exact path="/" key="/-Feed" component={Feed} />
            <Route path="/:subdir" key="/:subdir-Feed"component={Feed} />
            <Route key="404" component={Feed} />
        </Switch>
    );
}

export default Routing;
