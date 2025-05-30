import { Component, inject, OnInit } from '@angular/core';
import { DbzService } from '../../services/dbz.service';
import { tap } from 'rxjs';
import { Character } from '../../services/models/characters.interface';

@Component({
  selector: 'app-home',
  providers: [DbzService],
  imports: [],
  templateUrl: './home.component.html',
})
export default class HomeComponent implements OnInit {
  //Injects
  private dbzService = inject(DbzService);
  //Variables
  character: Character[] = [];

  ngOnInit(): void {
    this.dbzService
      .getCharacters()
      .pipe(
        tap((characters) => {
          console.log('Characters loaded:', characters);
          this.character = characters
        })
      )
      .subscribe();
  }
}
