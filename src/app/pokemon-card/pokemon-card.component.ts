import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from 'src/_model/pokemon.model';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.sass'],
})
export class PokemonCardComponent {
  @Input('pokemon')
  public pokemon: Pokemon | undefined;

  public handleZeroPadding(number?: number): string {
    let s = String(number);
    while (s.length < 3) {
      s = '0' + s;
    }
    return s;
  }
}
