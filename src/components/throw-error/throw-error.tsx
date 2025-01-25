import { Component, ReactNode } from 'react';

export class ErrorButton extends Component {
  render(): ReactNode {
    return (
      <div className="search-panel">
        <button
          type="submit"
          className="btn btn-outline-light"
          style={{ marginLeft: 'auto', display: 'block' }}
        >
          Error
        </button>
      </div>
    );
  }
}
