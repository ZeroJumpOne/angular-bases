import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

   @Output()
   onDeleteCharacter: EventEmitter<string> = new EventEmitter();

   @Input()
   public characterList: Character[] =[
      {
         id: uuid(),
         name: 'Trunks',
         power: 10,
      }
   ]

   emitCharacter( id: string): void {

      // console.log({ indice });

      this.onDeleteCharacter.emit(id);
   }



}
