import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

   public heroNames: string[] = ['Ironman', 'Spiderman', 'Hulk', 'Antman'];
   public eliminado?: string = '';

   eliminarUltimo(): void {
      //this.eliminado = this.heroNames[this.heroNames.length - 1];
      this.eliminado = this.heroNames.pop();
   }

}
