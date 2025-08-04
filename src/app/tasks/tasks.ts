import {Component, input, signal} from '@angular/core';
import { Task } from './task/task';
import {DUMMY_TASKS, TaskElement} from '../dummy-tasks';
import {NewTask} from './new-task/new-task';

@Component({
  selector: 'app-tasks',
  imports: [Task, NewTask],
  templateUrl: './tasks.html',
  styleUrl: './tasks.scss'
})
export class Tasks {
  name = input<string | undefined>();
  selectedUserId = input.required<string | undefined>();

  isAddingTask = signal<boolean>(false);
  tasks = DUMMY_TASKS;


  getUserTasks() {
    return this.tasks.filter(task => task.userId === this.selectedUserId());
  }

  onCompleteTask(id:string) {
    this.tasks = this.tasks.filter(task => task.id !== id);
  }

  onStartAddTask() {
    this.isAddingTask.set(true);
  }

  onCloseAddModal() {
    this.isAddingTask.set(false);
  }

  onCreateNewTask(task: TaskElement) {
    this.tasks.unshift(task);
  }
}
