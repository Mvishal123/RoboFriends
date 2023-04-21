import React, { Component } from "react";

class ErrorBoundary extends Component {
  constructor() {
    super();
    this.state = {
        hasError : false
    };
  }

  componentDidCatch(Error){
    return this.setState({
        hasError : true
    })
  }

  render() {
    if (this.state.hasError) {
      return <h1>Oops. Something has gone wrong. Try reloading the page</h1>;
    } else {
      return this.props.children;
    }
  }
}

export default ErrorBoundary; 