import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  @Output() taskCreated = new EventEmitter<{taskCreated: string, alert: string}>();
  task = '';
  todo = [];

  onButtonPress() {
    // this.todo.push(this.task);
    // debugger
    // console.log(this.todo.length +1);
    this.todo.push(this.todo.length +1);

    this.taskCreated.emit({
      taskCreated: this.task,
      alert: 'info',
    })
  }

  constructor() { }

  ngOnInit(): void {
  }

}
