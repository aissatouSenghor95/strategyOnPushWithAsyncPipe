import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
const RANDOM_USER = [
  'Aida',
  'Zackaria',
  'Aminata',
  'Bintou',
  'Alioune'
];
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  users = [];
  users$ = new BehaviorSubject(this.users);

  add(): void {
    // this.users.push({ name: this.randomUser() });
    this.users$.next(this.users);
  }

  private randomUser(): string {
    const index = Math.floor(Math.random() * RANDOM_USER.length);
    return RANDOM_USER[index];
  }
}
