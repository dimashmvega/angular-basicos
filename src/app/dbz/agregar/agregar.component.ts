import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';
import { DbzServices } from '../services/dbs.services';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'
})
export class AgregarComponent {  

  @Input() nuevo: Personaje = {
    nombre: '',
    poder: 0
  }

  constructor( private dbzServices: DbzServices ){}
  //@Output() onNewCharacter: EventEmitter<Personaje> = new EventEmitter<Personaje>();

  agregar(){
    if(this.nuevo.nombre.trim().length===0){
      return;
    }    
    //this.onNewCharacter.emit(this.nuevo);
    this.dbzServices.agregarPersonaje( this.nuevo );
    
    this.nuevo = {
      nombre: '',
      poder: 0
    }    
  }

}
