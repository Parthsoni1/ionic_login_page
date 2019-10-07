import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { MaterialModule } from '../../Material/material.nodule';
import { IonicModule } from '@ionic/angular';
// import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { TimeTablePage } from './time-table.page';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
const routes: Routes = [
  {
    path: '',
    component: TimeTablePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MaterialModule,
    // BrowserAnimationsModule,
    NoopAnimationsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TimeTablePage]
})
export class TimeTablePageModule {}
