import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import queryString from 'query-string'
import Routing from "./routes/Routing";
import Header from "./modules/Header";
import Nav from "./components/Nav";

class App extends Component {

    getURLParam = (param) => {
        const urlParams = queryString.parse(this.props.location.search);
        return urlParams[param];
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

    componentDidMount() {
        console.log('App props: ', this.props);
    }

    render() {
        return (
            <div className="app clear">
              <Header />
              <Nav />

              <div className="container col-sm-12 col-md-12 col-lg-10 col-xl-10 float-right clear">
                <div className="feed-wrapper row col float-right">
                  <Routing />
                </div>
              </div>
            </div>
        );
    }
}

export default withRouter(App);
