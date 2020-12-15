import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeRegisterComponent } from './employee-register/employee-register.component';

import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeDetailsComponent,
    EmployeeRegisterComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
