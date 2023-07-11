import React from 'react';

class PortalErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }
  
    static getDerivedStateFromError(error) {
      // Update state so the next render will show the fallback UI.
      console.log('PortalErrorBoundary.getDerivedStateFromError: '+error);
      return { hasError: true };
    }
  
    componentDidCatch(error, errorInfo) {
      // You can also log the error to an error reporting service
      console.log('PortalErrorBoundary.getDerivedStateFromError: '+error);
      console.log('PortalErrorBoundary.getDerivedStateFromError: '+this.state.hasError);
    
      //logErrorToMyService(error, errorInfo);
    }
  
    render() {
      if (this.state.hasError) {
        // You can render any custom fallback UI
        return <h1>Something went wrong.</h1>;
      }
      console.log('PortalErrorBoundary.render: '+this.state.hasError);  
      return this.props.children; 
    }
  }

  export default PortalErrorBoundary;