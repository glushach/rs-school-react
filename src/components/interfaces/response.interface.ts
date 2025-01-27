import { IPokemon } from './pokemon.interface';

export interface IResponse {
  count: number;
  next: string;
  previous: null;
  results: IPokemon[];
}
