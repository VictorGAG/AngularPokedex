import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/_model/pokemon.model';
import { PokemonType } from 'src/_model/types.model';
import { PokemonsService } from '../services/pokemons.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.sass'],
})
export class PokemonListComponent {
  constructor(public pokemonService: PokemonsService) {}
}
