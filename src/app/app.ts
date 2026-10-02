import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  tasks: { id: number; title: string; done: boolean }[] = this.loadTasks();

  filter: 'all' | 'todo' | 'done' = 'all';

  darkMode: boolean = localStorage.getItem('darkMode') === 'true';

  get filteredTasks() {
    if (this.filter === 'todo') {
      return this.tasks.filter(task => !task.done);
    }
    if (this.filter === 'done') {
      return this.tasks.filter(task => task.done);
    }
    return this.tasks;
  }

  setFilter(filter: 'all' | 'todo' | 'done') {
    this.filter = filter;
  }

  addTask(title: string) {
    if (title.trim() === '') return;

    this.tasks.push({
      id: Date.now(),
      title: title.trim(),
      done: false
    });
    this.saveTasks();
  }

  toggleTask(task: { id: number; title: string; done: boolean }) {
    task.done = !task.done;
    this.saveTasks();
  }

  deleteTask(id: number) {
    this.tasks = this.tasks.filter(task => task.id !== id);
    this.saveTasks();
  }

  toggleDarkMode() {
    this.darkMode = !this.darkMode;
    localStorage.setItem('darkMode', String(this.darkMode));
    document.body.classList.toggle('dark', this.darkMode);
  }

  constructor() {
    document.body.classList.toggle('dark', this.darkMode);
  }

  loadTasks() {
    const saved = localStorage.getItem('tasks');
    return saved ? JSON.parse(saved) : [];
  }

  saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
}