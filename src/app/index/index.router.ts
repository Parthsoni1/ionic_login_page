import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexPage } from './index.page';



const routes: Routes = [
    {
        path: '',
        component: IndexPage,
        children: [
            {
                path: '',
                loadChildren: () => import('../pages/welcome/welcome.module').then(
                    m => m.WelcomePageModule
                )
            },
            {
                path: 'adminlogin',
                loadChildren: () => import('../pages/login/login.module').then(
                    m => m.LoginPageModule
                )
            },
            {
                path: 'userlogin',
                loadChildren: () => import('../pages/user-login/user-login.module').then(
                    m => m.UserLoginPageModule
                )
            },
            {
                path: 'user',
                loadChildren: () => import('../pages/user/user.module').then(
                    m => m.UserPageModule
                )
            },
            {
                path: 'userDetail',
                loadChildren: () => import('../pages/user-detail/user-detail.module').then(
                    m => m.UserDetailPageModule
                )
            }

        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class IndexRouter { }
