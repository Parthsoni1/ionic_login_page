import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';

import { PopupPage } from './popup.page';

const routes: Routes = [
  {
    path: '',
    component: PopupPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BrowserModule,
    HttpClientModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PopupPage]
})
export class PopupPageModule {}
