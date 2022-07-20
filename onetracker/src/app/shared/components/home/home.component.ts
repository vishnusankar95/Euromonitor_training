import { Component, OnInit } from '@angular/core';

import { LoginComponent } from './../login/login.component';
import {ProgressSpinnerMode} from '@angular/material/progress-spinner';
import { SignupComponent } from './../signup/signup.component';
import {ThemePalette} from '@angular/material/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})

export class HomeComponent  {

   routes =  [
    { path:'/login', component:LoginComponent, label: 'Login' },
    { path:'/signup', component:SignupComponent , label: 'SignUp' },
   ];

  constructor() {}
}
