import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';
import { DbzServices } from '../services/dbs.services';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent {    

  constructor() {}

  nuevo: Personaje ={
    nombre: 'Maestro Roshi',
    poder: 1000
  }  

}
