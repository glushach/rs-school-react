import axios, { AxiosError } from 'axios';
import { IResponse } from '../components/interfaces/response.interface';
import { IPokemon } from '../components/interfaces/pokemon.interface';

export async function fetchPokemon(): Promise<IPokemon[]> {
  try {
    const { data } = await axios.get<IResponse>(
      'https://pokeapi.co/api/v2/pokemon'
    );
    return data.results;
  } catch (e: unknown) {
    const error = e as AxiosError;
    throw error;
  }
}
