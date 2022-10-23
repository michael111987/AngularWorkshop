import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-alert-success',
  templateUrl: './alert-success.component.html',
  styleUrls: ['./alert-success.component.css']
})
export class AlertSuccessComponent implements OnInit {
  @Input() alertText: {type: string, name: string, content: string};

  constructor() { }

  ngOnInit(): void {
  }

}
