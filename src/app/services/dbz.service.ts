import { inject, Injectable } from '@angular/core';
import { Character } from './models/characters.interface';
import { HttpClient } from '@angular/common/http';

const apiCharacters = 'https://dragonball-api.com/api/characters';

@Injectable({
  providedIn: 'root'
})
export class DbzService {
  private http = inject(HttpClient);


getCharacters() {
  return this.http.get<Character[]>(apiCharacters);
}
}
