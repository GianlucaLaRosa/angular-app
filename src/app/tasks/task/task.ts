import { Component, input, output } from '@angular/core';
import { type TaskElement } from '../../dummy-tasks';

@Component({
  selector: 'app-task',
  imports: [],
  templateUrl: './task.html',
  styleUrl: './task.scss'
})
export class Task {
  complete = output<string>();

  task = input.required<TaskElement>()

  onComplete () {
    this.complete.emit(this.task().id);
  }
}
