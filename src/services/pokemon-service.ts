import axios, { AxiosError } from 'axios';
import { IResponse } from '../components/interfaces/response.interface';
import { IPokemon } from '../components/interfaces/pokemon.interface';

export async function fetchPokemon(): Promise<IPokemon[]> {
  try {
    const searchStr: string = localStorage.getItem('searchStr') || '';

    const url: string = searchStr
      ? `https://pokeapi.co/api/v2/pokemon?limit=1304`
      : `https://pokeapi.co/api/v2/pokemon?limit=20`;

    const { data } = await axios.get<IResponse>(url);

    const results = data.results
      .filter((pokemon) =>
        searchStr
          ? pokemon.name.toLowerCase().includes(searchStr.toLowerCase())
          : true
      )
      .slice(0, 20);

    return results;
  } catch (e: unknown) {
    const error = e as AxiosError;
    throw error;
  }
}
