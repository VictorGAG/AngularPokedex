import { PokemonType } from './types.model';

export interface Pokemon {
  image: string;
  number: number;
  name: string;
  type: PokemonType[];
}
