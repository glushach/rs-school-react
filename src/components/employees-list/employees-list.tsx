import { EmployeesListItem } from '../employees-list-item/employees-list-item';

import './employees-list.css';

const EmployeesList = () => {
  return (
    <div className="app-list">
      <ul className="list-group">
        <EmployeesListItem />
        <EmployeesListItem />
        <EmployeesListItem />
      </ul>
    </div>
  );
};

export { EmployeesList };
