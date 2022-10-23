import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'my-first-app';
  showTodo = false;
  buttonTodo = 'Open todo list';

  showInfo = false;
  infoText = 'info message';
  showWarning = false;
  warningText = 'warning message';
  showSuccess = true;
  successText = 'success message';

  onTaskCreated(taskData: {task: string, alert: string}) {
  // onTaskCreated(task: string, alert: string) {

    debugger
    this.infoText = taskData.task;
    this.showInfo = true;
  }



}
