import { SearchPanel } from '../search-panel/search-panel';
import { EmployeesList } from '../employees-list/employees-list';
import { ErrorButton } from '../error-button/error-button';
import { ErrorDescription } from '../error-description/error-description';

import './app.css';

function App() {
  return (
    <div className="app">
      <div className="search-panel">
        <SearchPanel />
      </div>
      <EmployeesList />

      {/* <ErrorDescription /> */}
      <ErrorButton />
    </div>
  );
}

export default App;
