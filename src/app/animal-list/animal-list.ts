import { Component } from '@angular/core';
import { Animal } from '../animal/animal';

@Component({
  imports: [Animal],
  selector: 'app-animal-list',
  styleUrl: './animal-list.css',
  templateUrl: './animal-list.html',
})
export class Animals {

  animals = [
  {"tipo": "Mammifero", "specie": "Cane", "nome": "pupi", "dob": new Date('2021-05-12')},
  {"tipo": "Mammifero", "specie": "Gatto", "nome": "mino", "dob": new Date('2020-09-2')},
  { "tipo": "Pesce", "specie": "Tonno", "nome": "Fifo", "dob": new Date('2025-05-2')},
  { "tipo": "Uccello", "specie": "Aquila", "nome": "Aui", "dob": new Date('2026-09-22')},
  { "tipo": "Insetto", "specie": "Formica", "nome": "mica", "dob": new Date('2023-07-12')}
  ];
}