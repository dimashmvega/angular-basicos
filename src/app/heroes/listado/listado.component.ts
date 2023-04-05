import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})

export class ListadoComponent {
  
  heroes: string[] =['Spiderman', 'Ironman', 'Hulk', 'Thor', 'Capitan America'];
  heroesBorrados:string[] =[];

  borrarHeroe(){      
    if(this.heroes.length>0)  {
      const heroeBorrado = this.heroes.shift() || ''; 
      console.log(heroeBorrado);
      this.heroesBorrados.push(heroeBorrado?.toString());        
    }
      
  }

}
