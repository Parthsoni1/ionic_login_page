import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./index/index.module').then(m => m.IndexPageModule)
  },
  { path: 'user-login', loadChildren: './pages/user-login/user-login.module#UserLoginPageModule' },  { path: 'attendance', loadChildren: './pages/attendance/attendance.module#AttendancePageModule' },
  { path: 'complain-list', loadChildren: './pages/complain-list/complain-list.module#ComplainListPageModule' }


  // { path: 'user', loadChildren: './pages/user/user.module#UserPageModule' },
  // { path: 'user-detail', loadChildren: './pages/user-detail/user-detail.module#UserDetailPageModule' },
  // { path: 'complain-box', loadChildren: './pages/complain-box/complain-box.module#ComplainBoxPageModule' },
  // { path: 'time-table', loadChildren: './pages/time-table/time-table.module#TimeTablePageModule' },
  // { path: 'popup', loadChildren: './pages/popup/popup.module#PopupPageModule' }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
