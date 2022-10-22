import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AlertInfoComponent } from './alert-info/alert-info.component';
import { AlertWarningComponent } from './alert-warning/alert-warning.component';

import { AppComponent } from './app.component';
import { AlertSuccessComponent } from './alert-success/alert-success.component';

@NgModule({
  declarations: [
    AppComponent,
    AlertInfoComponent,
    AlertWarningComponent,
    AlertSuccessComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
