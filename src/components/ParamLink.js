import React from 'react';
import { withRouter } from "react-router-dom";
import {updateURLParams} from '../helpers/url';

const ParamLink = (props) => {
    return(
        <div
            className={props.className}
            onClick={() => {updateURLParams(props, props.param, props.value)}}
        >
            {props.children}
        </div>
    );
}

export default withRouter(ParamLink);
