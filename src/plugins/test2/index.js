import React, {Component} from 'react';
import HookStore from '../../Hooks';

export class OtherTestPlugin extends Component {
    // Adds another entry to search data as a proof of filters
    logData = (data) => {
        data.videos = [...data.videos, data.videos[0]];
        console.log('Manipulated search data from plugin: ', data);
        return data;
    }

    // Proofs-of-concept for hook-based plugin architecture
    listen = () => {
        HookStore.addAction('after_plugin_registry', 'TestPlugin', () => {
            console.log('Log from plugin: after_plugin_registry');
        });

        HookStore.addFilter( 'search_results', 'TestPlugin', this.logData , 10 );
    }

    componentDidMount(){
        console.log('Test plugin loaded.');
        this.listen();
    }

    render(){
        return(<div>Test Plugin 2</div>);
    }
}
