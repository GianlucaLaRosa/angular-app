import {DUMMY_TASKS, TaskElement} from '../dummy-tasks';
import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})
export class TasksService {
  private   tasks = DUMMY_TASKS;

  getUserTasks(selectedUserId: string) {
    return this.tasks.filter(task => task.userId === selectedUserId);
  }

  onCompleteTask(id:string) {
    this.tasks = this.tasks.filter(task => task.id !== id);
  }

  onCreateNewTask(task: TaskElement) {
    this.tasks.unshift(task);
  }

  addTask(task: TaskElement) {
    this.tasks.unshift(task);
  }
}
