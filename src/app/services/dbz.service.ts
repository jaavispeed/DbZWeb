import { inject, Injectable } from '@angular/core';
import { CharacterResponse } from './models/characters.interface';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

const apiCharacters = 'https://dragonball-api.com/api/characters';

@Injectable({
  providedIn: 'root',
})
export class DbzService {
  private http = inject(HttpClient);

  getCharacters() {
    return this.http.get<CharacterResponse>(apiCharacters).pipe(
      map((response) => response.items)
    );
  }
}
