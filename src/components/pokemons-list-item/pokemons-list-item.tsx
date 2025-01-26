import { Component, ReactNode } from 'react';
import { IPokemon } from '../interfaces/pokemon.interface';

import './pokemons-list-item.css';

interface PokemonsListItemProps {
  pokemon: IPokemon;
  key: string;
}

export class PokemonsListItem extends Component<PokemonsListItemProps> {
  render(): ReactNode {
    const { pokemon } = this.props;

    return (
      <li className="list-group-item d-flex justify-content-between">
        <span className="list-group-item-label">{pokemon.name}</span>
        <div className="d-flex justify-content-center align-items-center">
          {pokemon.url}
        </div>
      </li>
    );
  }
}
