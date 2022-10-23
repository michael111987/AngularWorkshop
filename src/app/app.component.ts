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
  infoText = '';
  showWarning = false;
  warningText = '';
  showSuccess = true;
  successText = '';
}
