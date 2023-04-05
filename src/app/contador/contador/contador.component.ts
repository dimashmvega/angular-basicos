import { Component } from '@angular/core';

@Component({
    selector: 'app-contador',
    template: `
    
        <h1>{{ titulo }}</h1>
        <h3>La base es: {{ base }}</h3>

        <button (click)=" acumular() "> + {{ base }} </button>
        <span>{{ numero }}</span>
        <button (click)=" acumular(false)"> - {{ base }} </button>

    `
  })

export class ContadorComponent{
    titulo:string = `Contador App`;    
    numero:number=10;
    base:number=5;

    acumular(esAumento:boolean =true):void{
        if(esAumento){
        this.numero+=this.base;
        }else{
        this.numero-=this.base;
        }
        
    }
}