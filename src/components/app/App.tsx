import { useState } from 'react';
import { PokemonsList } from '../pokemons-list/pokemons-list';
import { ErrorButton } from '../error-button/error-button';
import { ErrorBoundary } from '../error-boundary/error-boundary';
import { Spinner } from '../spinner/spinner';

import './app.css';

const App = () => {
  const [loading, setLoading] = useState(false);

  return (
    <>
      {loading && <Spinner />}
      <ErrorBoundary>
        <div className="app">
          <PokemonsList loading={loading} setLoading={setLoading} />
          <ErrorButton />
        </div>
      </ErrorBoundary>
    </>
  );
};

export default App;
