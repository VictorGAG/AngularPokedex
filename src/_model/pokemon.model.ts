import { PokemonType } from './types.model';

export interface Pokemon {
  image: string;
  number: string;
  name: string;
  type: PokemonType[];
}
