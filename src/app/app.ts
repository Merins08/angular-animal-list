import { Component, signal } from '@angular/core';
import { Animals } from './animal-list/animal-list';

@Component({
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
  imports: [Animals],
})
export class App {
  title = 'Angular Animal List Merins08';
}