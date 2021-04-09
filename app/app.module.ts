import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCheckboxModule, 
  MatCardModule, 
  MatInputModule, 
  MatGridListModule, 
  MatButtonModule, 
  MatDialogModule, 
  MatSortModule, 
  MatTableModule, 
  MatPaginatorModule,
  MatIconModule,
  MatFormFieldModule,
  MatSelectModule,
  MatDatepickerModule} from '@angular/material';

@NgModule({
  imports:      [ 
    BrowserModule, FormsModule, 
    BrowserAnimationsModule,
    MatCheckboxModule, 
  MatCardModule, 
  MatInputModule, 
  MatGridListModule, 
  MatButtonModule, 
  MatDialogModule, 
  MatSortModule, 
  MatTableModule, 
  MatPaginatorModule,
  MatIconModule,
  MatFormFieldModule,
  MatSelectModule,
  MatDatepickerModule,
  ReactiveFormsModule
    ],
  declarations: [ AppComponent, HelloComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
