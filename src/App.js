import React, { Component } from 'react';
import Nav from './components/Nav';
import Feed from './modules/Feed';

class App extends Component {
    componentDidMount(){

    }

    render() {
        return (
            <div className="app clear">
                <Nav />

                <div className="container col-sm-12 col-md-12 col-lg-10 col-xl-10 float-right clear">
                    <div className="row col float-right">
                        <Feed />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
