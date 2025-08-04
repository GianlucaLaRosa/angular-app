import { Component, input, output } from '@angular/core';
import { type TaskElement } from '../../dummy-tasks';
import {Card} from '../../shared/card/card';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-task',
  imports: [
    Card,
    DatePipe
  ],
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
