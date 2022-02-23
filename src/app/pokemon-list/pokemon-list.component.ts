import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/_model/pokemon.model';
import { PokemonType } from 'src/_model/types.model';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.sass'],
})
export class PokemonListComponent {
  public pokemons: Pokemon[] = [
    {
      image:
        'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png',
      number: 1,
      name: 'Bulbasaur',
      type: [PokemonType.Grass, PokemonType.Poison],
    },
    {
      image:
        'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/002.png',
      number: 2,
      name: 'Ivysaur',
      type: [PokemonType.Grass, PokemonType.Poison],
    },
    {
      image:
        'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/003.png',
      number: 3,
      name: 'Venusaur',
      type: [PokemonType.Grass, PokemonType.Poison],
    },
  ];
}
