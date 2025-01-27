import { Component, ReactNode } from 'react';
import './error-description.css';

interface ErrorDescriptionProps {
  message: string;
  onReset: () => void;
}

export class ErrorDescription extends Component<ErrorDescriptionProps> {
  render(): ReactNode {
    return (
      <div className="error">
        <p className="error-text">{this.props.message}</p>
        {this.props.message === 'Error: I crashed!' && (
          <button
            className="btn btn-outline-light"
            onClick={this.props.onReset}
          >
            Go home
          </button>
        )}
      </div>
    );
  }
}
