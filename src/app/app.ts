import { Component, signal, computed } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Header} from './header/header';
import {User} from './user/user';
import { Tasks } from './tasks/tasks';
import { DUMMY_USERS } from './dummy-users';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, User, Tasks],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('first-angular-app');

  users = DUMMY_USERS;

  selectedId = signal<string>('u1');

  selectedUser = computed<typeof DUMMY_USERS[number] | undefined>(() => this.users.find(user => user.id === this.selectedId()));

  onSelectUser(id: string) {
    this.selectedId.set(id);
  }

  protected readonly DUMMY_USERS = DUMMY_USERS;
}
