import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class DbzService {

   public characters: Character[] = [
      {
         id: uuid(),
         name: 'Krillin',
         power: 1000,
      },
      {
         id: uuid(),
         name: 'GoKu',
         power: 9500,
      },
      {
         id: uuid(),
         name: 'Vegeta',
         power: 7500,
      }
   ];

   public onNewCharacter(character: Character): void {

      // debugger;

      // console.log('Main Page');
      // console.log(character);

      const newCharacter: Character = { ...character, id: uuid() };

      this.characters.push(newCharacter);

   }

   public onDeleteCharacter(indice: number): void {

      // console.log('Main Page');
      // console.log({indice});

      this.characters.splice(indice, 1);
   }

   public onDeleteCharacterById( uuid: string): void {

      this.characters = this.characters.filter( (item) => item.id !== uuid);

   }

}
