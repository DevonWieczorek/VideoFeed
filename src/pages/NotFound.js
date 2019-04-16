import React from 'react';
import Search from '../components/Search';

const NotFound = () => {
    return(
        <div className="not-found">
            <h1 className="brand-color">Oops!</h1>
            <div>Looks like we couldn't find what you were looking for.</div>
            <div className="try-search"><Search /></div>
        </div>
    );
}

export default NotFound;
