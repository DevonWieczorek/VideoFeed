import React, {Component} from 'react';
import { isMobile } from "react-device-detect";
import SearchField from "react-search-field";
import { withRouter } from "react-router-dom";
import queryString from 'query-string'

class Search extends Component {
    state = {
        active: false,
        classString: 'search-bar',
        searchString: ''
    }

    classString = () => {
        return `search-bar ${(this.state.active) ? 'active' : 'hidden'}`;
    }

    updateSearch = (value) => {
        this.setState({...this.state, searchString: value});
    }

    isActive = () => {
        if(!isMobile){ return true; }
        else{ return this.state.active; }
    }

    onSearchClick = (value) => {
        console.log('search: ', value);
        if(this.state.active){
            if(this.state.searchString) this.submit();
            if(isMobile) this.setState({...this.state, active: false});
        }
        else{
            this.setState({
                ...this.state,
                active: true
            }, () => {document.getElementsByClassName('react-search-field-input')[0].focus()});
        }
    }

    updateURLParams = (param, value, updateURL) => {
        const url = this.props.match.url;
        const urlParams = queryString.parse(this.props.location.search);
        urlParams[param] = value;
        let pathWithParams = `${url}?${queryString.stringify(urlParams)}`;

        if(updateURL){
            this.props.history.push(pathWithParams);
        }
        else{
            return pathWithParams;
        }
    }

    submit = () => {
        console.log('submit: ', this.state.searchString);
        this.updateURLParams('q', this.state.searchString, true);
        this.setState({...this.state, searchString: ''});
    }

    componentDidMount(){
        console.log('search', this.props.match);
        this.setState({
            ...this.state,
            active: this.isActive()
        }, this.setState({
            ...this.state,
            classString: this.classString()
        }));
    }

    render(){
        return(
            <SearchField
              placeholder="Search..."
              onChange={(value, event) => { this.updateSearch(value) }}
              onEnter={(value, event) => { this.submit() }}
              onSearchClick={(value, event) => { this.onSearchClick(value) }}
              searchText={this.state.searchString}
              classNames={this.classString()}
            />
        );
    }
}

export default withRouter(Search);
