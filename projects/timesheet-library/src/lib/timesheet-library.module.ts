import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TimesheetLibraryComponent } from './timesheet-library.component';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';



@NgModule({
  declarations: [
    TimesheetLibraryComponent
  ],
  imports: [
    BrowserModule,
    MatTableModule,
    MatButtonModule
  ],
  exports: [
    TimesheetLibraryComponent
  ]
})
export class TimesheetLibraryModule { }
