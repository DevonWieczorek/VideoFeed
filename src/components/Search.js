import React from 'react';
import SearchField from "react-search-field";

const Search = () => {
    return(
        <SearchField
          placeholder="Search..."
          onChange={() => {}}
          searchText=""
          classNames="search-bar"
        />
    );
}

export default Search;
