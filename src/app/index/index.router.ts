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
                path: 'login',
                loadChildren: () => import('../pages/login/login.module').then(
                    m => m.LoginPageModule
                )
            },
            {
                path: 'signup',
                loadChildren: () => import('../pages/signup/signup.module').then(
                    m => m.SignupPageModule
                )
            },
            {
                path: 'user',
                loadChildren: () => import('../pages/user/user.module').then(
                    m => m.UserPageModule
                )
            },
            {
                path: 'complain',
                loadChildren: () => import('../pages/complain-box/complain-box.module').then(
                    m => m.ComplainBoxPageModule
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
