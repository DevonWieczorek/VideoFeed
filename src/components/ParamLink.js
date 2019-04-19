import React from 'react';
import { withRouter } from "react-router-dom";
// import { NavLink } from "react-router-dom";
import {getURLParam, preservePathUpdateParams} from '../utils/url';

const ParamLink = (props) => {
    // Get the url's value of this ParamLink's param (used for active class)
    const urlParam = getURLParam(props, props.param);

    return(
        <div
            className={(urlParam === props.value) ?
                `${props.className} ${props.activeClassName}`
            : props.className}
            onClick={() => {
                preservePathUpdateParams(props, {[props.param]: props.value, 'page': 1})
            }}
        >
            {props.children}
        </div>
    );
}

export default withRouter(ParamLink);
