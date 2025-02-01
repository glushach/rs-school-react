import { useState, useEffect, useCallback } from 'react';
import { fetchPokemon } from '../../services/pokemon-service';
import { PokemonsListItem } from '../pokemons-list-item/pokemons-list-item';
import { IPokemon } from '../interfaces/pokemon.interface';
import { SearchPanel } from '../search-panel/search-panel';
import { NotFound } from '../not-found/not-found';

import './pokemons-list.css';

interface PokemonsListProps {
  setLoading: (loading: boolean) => void;
}

export const PokemonsList: React.FC<PokemonsListProps> = ({ setLoading }) => {
  const [pokemons, setPokemons] = useState<IPokemon[]>([]);
  const [error, setError] = useState<string>('');

  const loadData = useCallback(async () => {
    setLoading(true);
    try {
      const pokemons = await fetchPokemon();
      setPokemons(pokemons);
    } catch (error) {
      setError(
        error instanceof Error ? error.message : 'Unknown error occurred'
      );
    } finally {
      setLoading(false);
    }
  }, [setLoading]);

  useEffect(() => {
    loadData();
  }, [loadData]);

  if (error) {
    throw new Error(error);
  }

  return (
    <>
      <div className="search-panel">
        <SearchPanel onSearch={loadData} />
      </div>
      <div className="app-list">
        <ul className="list-group">
          {pokemons.length === 0 ? (
            <NotFound />
          ) : (
            pokemons.map((pokemon) => {
              const url: string = pokemon.url;
              const id: string = url.split('/').filter(Boolean).pop() || '';
              return <PokemonsListItem pokemon={pokemon} key={id} />;
            })
          )}
        </ul>
      </div>
    </>
  );
};
