import { Component, inject, OnInit } from '@angular/core';
import { DbzService } from '../../services/dbz.service';
import { tap } from 'rxjs';

@Component({
  selector: 'app-home',
  providers: [DbzService],
  imports: [],
  templateUrl: './home.component.html',
})
export default class HomeComponent implements OnInit {

  private dbzService = inject(DbzService);


  ngOnInit(): void {

    this.dbzService.getCharacters().pipe(tap((characters) => {
      console.log('Characters loaded:', characters);
    })).subscribe()
  }

}
