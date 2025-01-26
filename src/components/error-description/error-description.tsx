import { Component, ReactNode } from 'react';
import './error-description.css';

export class ErrorDescription extends Component<{ message: string }> {
  handleReload = () => {
    window.location.reload();
  };

  render(): ReactNode {
    return (
      <div className="error">
        <p className="error-text">{this.props.message}</p>
        {this.props.message === 'Error: I crashed!' && (
          <button className="btn btn-outline-light" onClick={this.handleReload}>
            Go home
          </button>
        )}
      </div>
    );
  }
}
