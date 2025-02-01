import { IPokemon } from '../interfaces/pokemon.interface';

import './pokemons-list-item.css';

interface PokemonsListItemProps {
  pokemon: IPokemon;
}

export const PokemonsListItem: React.FC<PokemonsListItemProps> = ({
  pokemon,
}) => {
  return (
    <li className="list-group-item d-flex justify-content-between">
      <span className="list-group-item-label">{pokemon.name}</span>
      <div className="d-flex justify-content-center align-items-center">
        {pokemon.url}
      </div>
    </li>
  );
};
