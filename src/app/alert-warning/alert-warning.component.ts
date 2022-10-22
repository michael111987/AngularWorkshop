import { Component } from "@angular/core";

//decorator
@Component({
    selector: 'app-alert-warning',
    template: `
    <p>This ist a warning message</p>
    `,
    styles: [
        `
          p {
            padding: 20px;
            background-color: mistyrose;
            border: 1px solid red;
          }
        `
    ]
}) 
export class AlertWarningComponent{

}