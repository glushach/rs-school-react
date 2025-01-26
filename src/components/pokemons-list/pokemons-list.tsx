import { Component, ReactNode } from 'react';
import { fetchPokemon } from '../../services/pokemon-service';
import { PokemonsListItem } from '../pokemons-list-item/pokemons-list-item';
import { IPokemon } from '../interfaces/pokemon.interface';

import './pokemons-list.css';

interface PokemonsListProps {
  loading: boolean;
  setLoading: (loading: boolean) => void;
}

interface PokemonsListState {
  pokemons: IPokemon[];
  error: string;
}

export class PokemonsList extends Component<PokemonsListProps> {
  state: PokemonsListState = {
    pokemons: [],
    error: '',
  };

  async componentDidMount() {
    const { setLoading } = this.props;
    setLoading(true);

    try {
      const pokemons = await fetchPokemon();
      this.setState({ pokemons });
    } catch (error) {
      this.setState({
        error: error,
      });
    } finally {
      setLoading(false);
    }
  }

  render(): ReactNode {
    const { pokemons, error } = this.state;

    if (error) {
      const e = error as unknown;
      throw new Error(
        e instanceof Error ? e.message : 'Unknown error occurred'
      );
    }

    return (
      <div className="app-list">
        <ul className="list-group">
          {pokemons.map((pokemon) => {
            const url: string = pokemon.url;
            const id: string = url.split('/').filter(Boolean).pop() || '';
            return <PokemonsListItem pokemon={pokemon} key={id} />;
          })}
        </ul>
      </div>
    );
  }
}
