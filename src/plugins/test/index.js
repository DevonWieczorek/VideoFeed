import React, {Component} from 'react';

class TestPlugin extends Component {
    componentDidMount(){
        console.log('Test plugin loaded.');
    }

    render(){
        return(<div>Test Plugin</div>);
    }
}

export default TestPlugin;
