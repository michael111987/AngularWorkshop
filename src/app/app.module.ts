import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AlertInfoComponent } from './alert-info/alert-info.component';
import { AlertWarningComponent } from './alert-warning/alert-warning.component';

import { AppComponent } from './app.component';
import { AlertSuccessComponent } from './alert-success/alert-success.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TodoComponent } from './todo/todo.component';
import { BindingTaskComponent } from './binding-task/binding-task.component';

@NgModule({
  declarations: [
    AppComponent,
    AlertInfoComponent,
    AlertWarningComponent,
    AlertSuccessComponent,
    TodoComponent,
    BindingTaskComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
