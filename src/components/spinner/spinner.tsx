import { Component, ReactNode } from 'react';
import './spinner.css';

export class Spinner extends Component {
  render(): ReactNode {
    return (
      <div className="spinner">
        <div className="lds-dual-ring"></div>
      </div>
    );
  }
}
