import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  imports: [CommonModule],
  selector: 'app-animal',
  styleUrl: './animal.css',
  templateUrl: './animal.html',
})
export class Animal {

  @Input() item : any;
  @Input() index : number=0;

  M_COLOR = "red";
  P_COLOR = "lightblue";
  I_COLOR = "lightgreen";
  U_COLOR = "orange";

  getStyle(a: any){

    const now = new Date();

    let age = now.getFullYear() - a.dob.getFullYear();

    return{  
      'backgroundColor': 
      a.tipo == 'Mammifero' ? this.M_COLOR : 
      a.tipo == 'Pesce' ? this.P_COLOR : 
      a.tipo == 'Insetto' ? this.I_COLOR : this.U_COLOR,
      'textDecoration': (a.specie === 'Cane' || a.specie === 'Gatto') ? 'underline' : 'none',
      'font-weight' : age < 5  ? 'norlma' : 'bold'
    }
  }
}