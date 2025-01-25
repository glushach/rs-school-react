import { Component, ReactNode } from 'react';
import { EmployeesListItem } from '../employees-list-item/employees-list-item';

import './employees-list.css';

export class EmployeesList extends Component {
  render(): ReactNode {
    return (
      <div className="app-list">
        <ul className="list-group">
          <EmployeesListItem />
          <EmployeesListItem />
          <EmployeesListItem />
        </ul>
      </div>
    );
  }
}
