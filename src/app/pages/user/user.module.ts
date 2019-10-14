import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { UserPage } from './user.page';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { BrowserModule } from '@angular/platform-browser';

const routes: Routes = [
  {
    path: '',
    component: UserPage,
    children: [
      {
        path: 'timetable',
        loadChildren: () => import('../time-table/time-table.module').then(
          m => m.TimeTablePageModule
        )
      },
      {
        path: 'complain',
        loadChildren: () => import('../complain-box/complain-box.module').then(
          m => m.ComplainBoxPageModule
        )
      },
      {
        path: 'attndence',
        loadChildren: () => import('../attendance/attendance.module').then(
          m => m.AttendancePageModule
        )
      },
      {
        path: 'complainList',
        loadChildren: () => import('../complain-list/complain-list.module').then(
          m => m.ComplainListPageModule
        )
      }

    ]
  },


];

@NgModule({
  imports: [

    CommonModule,
    FormsModule,
    IonicModule.forRoot(),

    RouterModule.forChild(routes)
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  declarations: [UserPage]
})
export class UserPageModule { }
