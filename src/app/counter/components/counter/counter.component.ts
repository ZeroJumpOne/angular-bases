import { Component } from '@angular/core';

@Component({
   selector: 'app-counter',
   template: `
      <h3>Counter {{ counter }}</h3>
      <button class='btn btn-primary mx-2' (click)="increaseBy(+1)">+1</button>
      <button class='btn btn-primary mx-2' (click)="onReset()">Reset</button>
      <button class='btn btn-primary mx-2' (click)="increaseBy(-1)">-1</button>
`
})

export class CounterComponent {

   public counter: number = 10; //valor por defecto

   constructor() { }

   increaseBy( valor: number ): void {
    this.counter += valor;
   }

   onReset(valor: number = 10): void {
    this.counter = valor;
   }
}
