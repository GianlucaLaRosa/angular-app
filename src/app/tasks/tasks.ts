import { Component, input } from '@angular/core';
import { Task } from './task/task';
import { DUMMY_TASKS } from '../dummy-tasks';

@Component({
  selector: 'app-tasks',
  imports: [Task],
  templateUrl: './tasks.html',
  styleUrl: './tasks.scss'
})
export class Tasks {
  name = input<string | undefined>();

  tasks = DUMMY_TASKS;

  selectedUserId = input.required<string | undefined>();

  getUserTasks() {
    return this.tasks.filter(task => task.userId === this.selectedUserId());
  }

  onCompleteTask(id:string) {
    this.tasks = this.tasks.filter(task => task.id !== id);
  }
}
