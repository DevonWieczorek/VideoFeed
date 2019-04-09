import React, {Component} from 'react';
import {connect} from 'react-redux';
import { isMobile } from "react-device-detect";
import SearchField from "react-search-field";
import { withRouter } from "react-router-dom";
import {updateURLParams} from "../helpers/url";
import {getData} from "../actions";

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

    submit = () => {
        console.log('submit: ', this.state.searchString);
        updateURLParams(this.props, 'q', this.state.searchString);

        this.setState({
            ...this.state,
            searchString: '',
            active: (isMobile) ? false : true
        }, () => {
            // Wait for URL to update then make the API call 
            this.props.getData(this.props.location.search);
        });
    }

    componentDidMount(){
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

const mapStateToProps = (state) => {
    return {...state.meta};
}

export default connect(mapStateToProps, {getData})(withRouter(Search));
