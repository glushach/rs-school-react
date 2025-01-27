import axios, { AxiosError } from 'axios';
import { IResponse } from '../components/interfaces/response.interface';
import { IPokemon } from '../components/interfaces/pokemon.interface';

export async function fetchPokemon(offset = 0): Promise<IPokemon[]> {
  try {
    const searchStr: string = (localStorage.getItem('searchStr') || '').trim();

    const url: string = `https://pokeapi.co/api/v2/pokemon?limit=20&offset=${offset}`;

    const { data } = await axios.get<IResponse>(url);

    const results = data.results.filter((pokemon) =>
      searchStr
        ? pokemon.name.toLowerCase().includes(searchStr.toLowerCase())
        : true
    );

    return results;
  } catch (e: unknown) {
    const error = e as AxiosError;
    throw error;
  }
}
