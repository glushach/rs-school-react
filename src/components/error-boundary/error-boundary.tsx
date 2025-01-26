import React, { ErrorInfo } from 'react';
import { ErrorDescription } from '../error-description/error-description';

export class ErrorBoundary extends React.Component<React.PropsWithChildren> {
  state = {
    errorMessage: '',
  };

  static getDerivedStateFromError(error: Error) {
    return { errorMessage: error.toString() };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    this.logErrorToServices(error.toString(), info.componentStack);
  }
  logErrorToServices = console.log;
  render() {
    if (this.state.errorMessage) {
      return <ErrorDescription message={this.state.errorMessage} />;
    }
    return this.props.children;
  }
}
