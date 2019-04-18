import React from 'react';
import { withRouter } from "react-router-dom";
// import { NavLink } from "react-router-dom";
import {getURLParam, updatedURLParamString} from '../utils/url';

const ParamLink = (props) => {
    // Get the url's value of this ParamLink's param (used for active class)
    const urlParam = getURLParam(props, props.param);

    // Preserve the active path and then update the query param
    const preservePathUpdateParams = () => {
        props.match.url = props.location.pathname;
        props.history.push(updatedURLParamString(props, props.param, props.value));
    }

    /*
        // Results in youtube?/?caregory=test&page=1&q=query
        // Beacause of updatedURLParamString()
        <NavLink
            to={{
                pathname: props.location.pathname,
                search: updatedURLParamString(props, props.param, props.value)
            }}
            className={props.className}
            activeClassName={props.activeClassName}
        >
            {props.children}
        </NavLink>
    */

    return(
        <div
            className={(urlParam === props.value) ? `${props.className} ${props.activeClassName}` : props.className}
            onClick={() => {preservePathUpdateParams()}}
        >
            {props.children}
        </div>
    );
}

export default withRouter(ParamLink);
