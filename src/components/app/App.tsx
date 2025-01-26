import { PokemonsList } from '../pokemons-list/pokemons-list';
import { ErrorButton } from '../error-button/error-button';
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
        <ErrorBoundary>
          <div className="app">
            <PokemonsList loading={loading} setLoading={this.setLoading} />
            <ErrorButton />
          </div>
        </ErrorBoundary>
      </>
    );
  }
}

export default App;
