import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from 'src/_model/pokemon.model';
import { Utils } from '../services/Utils.service';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.sass'],
})
export class PokemonCardComponent {
  @Input('pokemon')
  public pokemon: Pokemon | undefined;

  public Utils = new Utils();
}
