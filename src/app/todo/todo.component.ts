import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  task = '';
  todo = [];

  onButtonPress() {
    // this.todo.push(this.task);
    debugger
    console.log(this.todo.length +1);
    this.todo.push(this.todo.length +1);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
