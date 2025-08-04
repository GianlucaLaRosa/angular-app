import {Component, input, output, signal} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {TaskElement} from '../../dummy-tasks';

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

  onCreateNewTask = output<TaskElement>();
  createTask() {
    const newTask: TaskElement = {
      id: new Date().getTime().toString(),
      title: this.enteredTitle(),
      summary: this.enteredSummary(),
      dueDate: this.enteredDate(),
      userId: this.userId()
    };
    this.onCreateNewTask.emit(newTask);
    this.closeModal();
  }
}
