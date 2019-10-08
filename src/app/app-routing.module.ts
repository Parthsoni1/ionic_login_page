import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./index/index.module').then(m => m.IndexPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  }
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
