import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule , IonicRouteStrategy } from '@ionic/angular';

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
          path: '',
          loadChildren: () => import('../../home/home.module').then(
              m => m.HomePageModule
          )
      },
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
        path: 'userDetail',
        loadChildren: () => import('../user-detail/user-detail.module').then(
            m => m.UserDetailPageModule
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
export class UserPageModule {}
