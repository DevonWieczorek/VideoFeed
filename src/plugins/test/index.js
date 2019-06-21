import React, {Component} from 'react';
import HookStore from '../../Hooks';

class TestPlugin extends Component {
    componentDidMount(){
        HookStore.addAction('after_plugin_registry', 'TestPlugin', () => {
            console.log('Log from plugin: after_plugin_registry');
        });
        console.log('Test plugin loaded.');
    }

    render(){
        return(<div>Test Plugin</div>);
    }
}

export default TestPlugin;
