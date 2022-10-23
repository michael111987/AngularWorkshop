import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  @Output() taskCreated = new EventEmitter<{task: string, alert: string}>();
  task = 'task';
  todo = [];

  onButtonPress() {
    this.todo.push(this.task);
    // debugger
    // console.log(this.todo.length +1);
    // this.todo.push(this.todo.length +1);
// debugger
    this.taskCreated.emit({
      task: this.task,
      alert: 'info',
    })
  }

  constructor() { }

  ngOnInit(): void {
  }

}
