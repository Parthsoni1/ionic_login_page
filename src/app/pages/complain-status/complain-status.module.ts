import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { MaterialModule } from '../../Material/material.nodule';
import { IonicModule } from '@ionic/angular';

import { ComplainStatusPage } from './complain-status.page';

const routes: Routes = [
  {
    path: '',
    component: ComplainStatusPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MaterialModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ComplainStatusPage]
})
export class ComplainStatusPageModule {}
