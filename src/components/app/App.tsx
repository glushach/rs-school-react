import { SearchPanel } from '../search-panel/search-panel';
import { PokemonsList } from '../pokemons-list/pokemons-list';
import { ErrorButton } from '../throw-error/throw-error';
import { ErrorBoundary } from '../error-boundary/error-boundary';
import { Spinner } from '../spinner/spinner';

import './app.css';
import { Component, ReactNode } from 'react';

class App extends Component {
  state = {
    loading: false,
  };

  setLoading = (loading: boolean) => {
    this.setState({ loading });
  };

  render(): ReactNode {
    const { loading } = this.state;

    return (
      <>
        {loading && <Spinner />}
        <div className="app">
          <ErrorBoundary>
            <div className="search-panel">
              <SearchPanel />
            </div>
            <PokemonsList loading={loading} setLoading={this.setLoading} />
            <ErrorButton />
          </ErrorBoundary>
        </div>
      </>
    );
  }
}

export default App;
