import {Component, input, output, signal, inject} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {TaskElement} from '../../dummy-tasks';
import {TasksService} from '../tasks.service';

@Component({
  selector: 'app-new-task',
  imports: [
    FormsModule
  ],
  templateUrl: './new-task.html',
  styleUrl: './new-task.scss'
})
export class NewTask {
  userId = input.required<string>();

  onCloseNewTaskModal = output<void>();

  closeModal() {
    this.onCloseNewTaskModal.emit()
  }

  enteredTitle = signal<string>("");
  enteredSummary = signal<string>("");
  enteredDate = signal<string>("");

  private readonly tasksService = inject(TasksService);

  createTask() {
    const newTask: TaskElement = {
      id: new Date().getTime().toString(),
      title: this.enteredTitle(),
      summary: this.enteredSummary(),
      dueDate: this.enteredDate(),
      userId: this.userId()
    };
    this.tasksService.addTask(newTask);
    this.closeModal();
  }
}
