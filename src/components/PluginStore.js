/**
* This component is build under the assumption that your file structure is as follows:
* /
* index.js
* app.js
* Hooks.js
* -- components/
* ---- PluginStore.js
* -- actions/
* ---- index.js
* ---- action1.js
* ---- action2.js
* -- plugins/
* ---- index.js
* ---- plugin1.js
* ---- plugin2.js
*
* Plugins will be required to export 1 high order component from their root (index.js).
* Their directory will be added to the plugins directory.
* The plugin must be exported from plugins/index.js in order to be connected.
*
* Plugins will be provided with a variety of hooks
* to subscribe to using the @wordpress/hooks interface.
* https://www.ibenic.com/use-wordpress-hooks-package-javascript-apps/
*
* To use this component, you would nest it inside your provider (if you have one)
* then wrap your app inside of the PluginStore component.
*
* <Provider store={store}>
*   <PluginStore>
*       <App>
*   </PluginStore>
* </Provider>
**/

import React, {Component} from 'react';
import {connect} from 'react-redux';
import HookStore from '../Hooks';
import ErrorBoundary from './ErrorBoundary';

// We'll want to hook our plugins up to all of our actions
import * as actions from '../actions';

// Let's assume plugins are added to/imported from plugins folder just like actions
import * as plugins from "../plugins";

class PluginStore extends Component {
    constructor(props) {
        super(props)
        this.state = {
            children: [this.props.children]
        }
    }

    connectPluginsToComponent = () => {
        // Push imported plugins to array so we can iterate over them
        let _plugins = [];
        for(let plugin in plugins){
            // Need to convert the component function to a React element
            _plugins.push(React.createElement(plugins[plugin], null, null));
        }

        // Map PluginStore props to each plugin
        const connectedPlugins = React.Children.map([..._plugins], child => {
            return(
                // Protect our app from broken plugins
                <ErrorBoundary errorContent={() => {
                    console.log(`Error loading plugin: ${child.type.name}`)
                }}>
                    {React.cloneElement(child, {...this.props})}
                </ErrorBoundary>
            );
        });

        this.setState({
            ...this.state, children: [this.props.children, ...connectedPlugins]}, () => {
            // Fire off an event after our plugins are added to state and rendered
            HookStore.doAction( 'after_plugin_registry' );
        });
    }

    componentDidMount(){
        // Fire off an event before any plugins get loaded
        HookStore.doAction( 'before_plugin_registry' );

        this.connectPluginsToComponent();
    }

    render() {
        return (this.state.children);
    }
}

// Hook our plugins up to our global state
const mapStateToProps = (state) => {
    return{ ...state};
}

// Export component with all state and all dispatch actions
export default connect(mapStateToProps, {...actions})(PluginStore);
