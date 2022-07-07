import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdmindashboardComponent } from './components/admin/admindashboard/admindashboard.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { UsercartComponent } from './components/user/usercart/usercart.component';
import { UserdashbardComponent } from './components/user/userdashbard/userdashbard.component';

const routes: Routes = [
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:"home",component:HomeComponent},
  {path:"login",component:LoginComponent},
  {path:"signup",component:SignupComponent},
  {path:"userdashboard",component:UserdashbardComponent},
  {path:'cart',component:UsercartComponent},
  {path:"admindashboard",component:AdmindashboardComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
