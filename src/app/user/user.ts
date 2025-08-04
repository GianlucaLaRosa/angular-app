// import { Component,computed, signal } from '@angular/core';
// import { Component, Input } from "@angular/core";
// import {Component, input, computed, Output, EventEmitter} from '@angular/core';
import { Component, input, computed, output } from '@angular/core';
import { type UserElement } from '../dummy-users';
import {DUMMY_USERS} from '../dummy-users';

// type UserElement = {
//   id: string;
//   name: string;
//   avatar: string;
// }


// const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.scss'
})
export class User {
  // @Input({required: true}) avatar!: string;
  // @Input({required: true}) name!: string;

  // avatar = input.required<string>();
  // name = input.required<string>();
  // id = input.required<string>();

  user = input.required<UserElement>();
  isSelected = input<boolean>(false);
  select = output<string>();

  // @Output() select = new EventEmitter();

  imagePath = computed(() => `assets/users/${this.user().avatar}`);

  onSelectUser = () => {
    this.select.emit(this.user()?.id);
  }
  // selectedUser = signal(DUMMY_USERS[randomIndex]);

  // imagePath = computed(() => {
  //   return `assets/users/${this.selectedUser().avatar}`
  // })

  // get imagePath() {
  //   return `assets/users/${this.avatar}`;
  // }

  // onSelectUser() {
  //   const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
  //   this.selectedUser.set(DUMMY_USERS[randomIndex]);
  // }
}
