import React from 'react';

const Search = () => {
    return(
        <form className="navbar-form navbar-left" role="search">
          <div className="form-group">
            <input type="text" className="form-control" placeholder="Search">
          </div>
          <button type="submit" className="btn btn-default">Submit</button>
        </form>
    );
}

export default Search; 
