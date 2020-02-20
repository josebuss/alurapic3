import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { LoginGuard } from '../core/auth/login.guard';
import { SinginComponent } from './singin/singin.component';
import { SignupComponent } from './signup/signup.component';


const routes: Routes = [

    {
        path: '',
        component: HomeComponent,
        canActivate: [LoginGuard],
        children: [
            {
                path: '',
                component: SinginComponent
            },
            {
                path: 'signup',
                component: SignupComponent,
            }
        ]
    }
]

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class HomeRountingModule { }