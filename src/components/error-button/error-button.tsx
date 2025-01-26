import { Component, ReactNode } from 'react';

export class ErrorButton extends Component {
  state = {
    counter: 0,
  };

  handleError = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
  };

  render(): ReactNode {
    if (this.state.counter === 1) {
      // Simulate an error!
      throw new Error('I crashed!');
    }

    return (
      <div className="search-panel">
        <button
          type="submit"
          className="btn btn-outline-light"
          style={{ marginLeft: 'auto', display: 'block' }}
          onClick={this.handleError}
        >
          Simulate Error
        </button>
      </div>
    );
  }
}
