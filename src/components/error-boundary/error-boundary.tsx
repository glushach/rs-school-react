import { ErrorInfo, Component, PropsWithChildren } from 'react';
import { ErrorDescription } from '../error-description/error-description';

export class ErrorBoundary extends Component<PropsWithChildren> {
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

  handleReset = () => {
    this.setState({ errorMessage: '' });
  };

  render() {
    if (this.state.errorMessage) {
      return (
        <ErrorDescription
          message={this.state.errorMessage}
          onReset={this.handleReset}
        />
      );
    }
    return this.props.children;
  }
}
