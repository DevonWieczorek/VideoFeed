import React, {Component} from 'react';
import HookStore from '../../Hooks';

class TestPlugin extends Component {
    logData = (data) => {
        console.log('Search data from plugin: ', data);
        return data;
    }

    componentDidMount(){
        HookStore.addAction('after_plugin_registry', 'TestPlugin', () => {
            console.log('Log from plugin: after_plugin_registry');
        });
        console.log('Test plugin loaded.');
        HookStore.addFilter( 'search_results', 'TestPlugin', this.logData , 10 );
    }

    render(){
        return(<div>Test Plugin</div>);
    }
}

export default TestPlugin;
