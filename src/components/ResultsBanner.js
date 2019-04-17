import React from 'react';
import { withRouter } from "react-router-dom";
import {getURLParam} from '../helpers/url';

const ResultsBanner = (props) => {
    if(getURLParam(props, 'q')){
        return(
            <div className="results-banner">
                Displaying Results for: <span>{getURLParam(props, 'q')}</span>
            </div>
        );
    }
    return null;
}

export default withRouter(ResultsBanner);
