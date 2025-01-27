import { Component, ReactNode } from 'react';

export class NotFound extends Component {
  render(): ReactNode {
    return (
      <li className="list-group-item d-flex justify-content-between">
        <span className="list-group-item-label">Nothing Not Found</span>
      </li>
    );
  }
}
