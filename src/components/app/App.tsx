import { SearchPanel } from '../search-panel/search-panel';
import { EmployeesList } from '../employees-list/employees-list';
import { ErrorButton } from '../throw-error/throw-error';
import { ErrorBoundary } from '../error-boundary/error-boundary';

import './app.css';

function App() {
  return (
    <div className="app">
      <ErrorBoundary>
        <div className="search-panel">
          <SearchPanel />
        </div>
        <EmployeesList />
        <ErrorButton />
      </ErrorBoundary>
    </div>
  );
}

export default App;
