import { Component, input } from '@angular/core';

@Component({
  selector: 'app-tasks',
  imports: [],
  templateUrl: './tasks.html',
  styleUrl: './tasks.scss'
})
export class Tasks {
  name = input<string | undefined>();
}
