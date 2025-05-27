import { Component } from '@angular/core';
import HomeComponent from '../home/home.component';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-dbz-web',
  imports: [HomeComponent, NavbarComponent],
  templateUrl: './dbz-web.component.html',
})
export default class DbzWebComponent {

}
