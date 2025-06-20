import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { Subject, tap, takeUntil } from 'rxjs';
import { DbzService } from '../../services/dbz.service';
import { Character } from '../../services/models/characters.interface';

@Component({
  selector: 'app-cards',
  imports: [],
  providers: [DbzService],
  templateUrl: './cards.component.html',
})
export class CardsComponent implements OnInit, OnDestroy {

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
