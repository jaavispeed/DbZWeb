import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { DbzService } from '../../services/dbz.service';
import { Subject, takeUntil, tap } from 'rxjs';
import { Character } from '../../services/models/characters.interface';

@Component({
  selector: 'app-home',
  providers: [DbzService],
  imports: [],
  templateUrl: './home.component.html',
})
export default class HomeComponent implements OnInit, OnDestroy {
  //Injects
  private dbzService = inject(DbzService);
  //Variables
  character: Character[] = [];
  // Subject para cancelar suscripciones y evitar fugas
  cancelarSuscription = new Subject<void>();

  ngOnDestroy(): void {
    this.cancelarSuscription.next();
    this.cancelarSuscription.complete();
  }

  ngOnInit(): void {
    this.characters();
  }

  characters() {
    const characters = this.dbzService.getCharacters().pipe(
      tap((characters) => {
        this.character = characters;
      }),
      takeUntil(this.cancelarSuscription)
    );

    characters.subscribe();
  }
}
