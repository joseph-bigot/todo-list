import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  tasks = [
    { id: 1, title: 'Apprendre Angular', done: false },
    { id: 2, title: 'Créer ma todo list', done: false },
    { id: 3, title: 'La mettre sur GitHub', done: true }
  ];
}