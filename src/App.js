import React, { Component } from "react";
import { isMobile } from "react-device-detect";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Feed from "./modules/Feed";

class App extends Component {
  componentDidMount() {
      console.log(`Is mobile ${isMobile}`);
  }

  render() {
    return (
      <div className="app clear">
        <Header />
        <Nav />

        <div className="container col-sm-12 col-md-12 col-lg-10 col-xl-10 float-right clear">
          <div className="feed-wrapper row col float-right">
            <Feed />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
