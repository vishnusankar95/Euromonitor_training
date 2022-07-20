import { RouterModule, Routes } from '@angular/router';

import { AdmindashboardComponent } from './features/admindashboard/admindashboard.component';
import { HomeComponent } from './shared/components/home/home.component';
import { LoginComponent } from './shared/components/login/login.component';
import { NgModule } from '@angular/core';
import { SignupComponent } from './shared/components/signup/signup.component';
import { UserdashboardComponent } from './features/userdashboard/userdashboard.component';

const routes: Routes = [
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:"home",component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:"signup",component:SignupComponent},
   {path:"userdashboard",component:UserdashboardComponent},
   {path:"admindashboard",component:AdmindashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
