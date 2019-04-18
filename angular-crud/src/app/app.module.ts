import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {  RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { EmployeesListComponent } from './employees-list/employees-list.component';
import { EmployeesEditComponent } from './employees-edit/employees-edit.component';
import { EmployeesCreateComponent } from './employees-create/employees-create.component';

@NgModule({
  declarations: [
  
    AppComponent,
    EmployeesListComponent,
    EmployeesEditComponent,
    EmployeesCreateComponent
  ],
  imports: [
     RouterModule, BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
