import React, { Component } from 'react';

// https://reactjs.org/docs/error-boundaries.html
class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }

    componentDidCatch(error, info) {
        // You can also log the error to an error reporting service
        console.warn('ErrorBoundary Error:', error);
        console.warn('ErrorBoundary Info:', info);
        this.setState({hasError: true});
    }

    render() {
        if (this.state.hasError) {
            // You can render any custom fallback UI
            return this.props.errorContent;
        }
        return this.props.children;
    }
}

export default ErrorBoundary;
