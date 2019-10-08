import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { TimeTablePage } from './time-table.page';
import { MaterialModule } from '../../Material/material.nodule';
import { IonicModule } from '@ionic/angular';
// import { PopupPageModule } from '../popup/popup.module';
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

    RouterModule.forChild(routes)
  ],
  // exports: [PopupPageModule],
  declarations: [TimeTablePage]
})
export class TimeTablePageModule {}
