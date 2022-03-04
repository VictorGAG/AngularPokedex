import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, map, mergeMap } from 'rxjs';
import { Pokemon } from 'src/_model/pokemon.model';
import { Utils } from './Utils.service';

@Injectable({
  providedIn: 'root',
})
export class PokemonsService {
  private baseUrl = 'https://pokeapi.co/api/v2/';
  private Utils = new Utils();
  public pokemons: Pokemon[] = [];

  constructor(private httpClient: HttpClient) {
    this.httpClient
      .get<any>(this.baseUrl + 'pokemon')
      .pipe(
        map((val) => val.results),
        map((val: any) =>
          from(val).pipe(
            mergeMap((value: any) => this.httpClient.get(value.url))
          )
        ),
        mergeMap((val) => val)
      )
      .subscribe((result: any) => {
        const pokemon: Pokemon = {
          image: `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${this.Utils.ZeroPaddingHandler(
            result.id
          )}.png`,
          name: result.name,
          number: this.Utils.ZeroPaddingHandler(result.id),
          type: result.types.map((t: any) => t.type.name),
        };
        console.log(pokemon);
        this.pokemons[result.id - 1] = pokemon;
      });
  }
}
