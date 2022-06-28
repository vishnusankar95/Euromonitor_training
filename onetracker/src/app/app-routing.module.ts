import { RouterModule, Routes } from '@angular/router';

import { HomeTrackerComponent } from './components/home-tracker/home-tracker.component';
import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { SignupComponent } from './components/signup/signup.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'home',component:HomeTrackerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
