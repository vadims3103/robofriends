import React, {Component} from 'react';

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        }
    }

    componentDidCatch(error, errorInfo) {
        this.setState({hasError: true})
    }

    render() {
        return this.state.hasError ? <h1>Ooops! Something went wrong!</h1> : this.props.children;
        // if (this.state.hasError) {
        //     return (
        //         <div>
        //             <h1>Ooops! Something went wrong!</h1>
        //         </div>
        //     )
        // } else {
        //     return this.props.children
        // }
    }
}

export default ErrorBoundary;