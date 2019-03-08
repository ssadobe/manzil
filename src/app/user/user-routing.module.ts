import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { AppGuard } from '../app.guard';
//import {AppGuard} from './app.guard';

const routes: Routes = [{
    path:'',
    pathMatch: 'full',
    component: LoginComponent
  },
  {
    path:'profile',
    component: ProfileComponent,
    canActivate: [AppGuard]
  },
  {
    path:'login',
    component: LoginComponent
  }  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
