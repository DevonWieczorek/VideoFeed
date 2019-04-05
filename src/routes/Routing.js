import React from 'react';
import Feed from "../modules/Feed";
import { Route, Switch } from "react-router-dom";

const Routing = () => {
    return(
        <Switch>
            <Route exact path="/" component={Feed} />
            <Route path="/:subdir" component={Feed} />
            <Route component={Feed} />
        </Switch>
    );
}

export default Routing;
