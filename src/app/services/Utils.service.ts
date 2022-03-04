import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Utils {
  constructor() {}

  public ZeroPaddingHandler(number?: string | number) {
    let string = String(number);
    while (string.length < 3) {
      string = '0' + string;
    }
    return string;
  }
}
