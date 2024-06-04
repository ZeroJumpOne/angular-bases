import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

   public nombre: string = 'ironman';
   public edad: number = 45;

   public get capitalizeName() : string {
      return this.nombre.toUpperCase();
   }

   public getHeroeDescription(): string {
      return `${this.nombre} - ${this.edad}`;
   }

   changeHero(): void {
      this.nombre = 'spiderman';
   }

   changeAge(): void {
      this.edad = 26;
   }

   resetCambios(): void {
      this.nombre = 'ironman';
      this.edad = 45;
   }

}
