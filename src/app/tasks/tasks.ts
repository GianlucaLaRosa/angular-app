import {Component, input, signal} from '@angular/core';
import { Task } from './task/task';
import {TaskElement} from '../dummy-tasks';
import {NewTask} from './new-task/new-task';
import {TasksService} from './tasks.service';

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

  constructor(private tasksService: TasksService) {}

  getUserTasks() {
    return this.tasksService.getUserTasks(this.selectedUserId()!);
  }

  onCompleteTask(id:string) {
    this.tasksService.onCompleteTask(id);
  }

  onStartAddTask() {
    this.isAddingTask.set(true);
  }

  onCloseAddModal() {
    this.isAddingTask.set(false);
  }
}
