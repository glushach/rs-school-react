import { Component, ReactNode } from 'react';
import { PokemonsListItem } from '../pokemons-list-item/pokemons-list-item';

import './pokemons-list.css';

export class PokemonsList extends Component {
  render(): ReactNode {
    return (
      <div className="app-list">
        <ul className="list-group">
          <PokemonsListItem />
          <PokemonsListItem />
          <PokemonsListItem />
        </ul>
      </div>
    );
  }
}
