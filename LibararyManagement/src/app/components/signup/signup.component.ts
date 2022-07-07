import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit {

  signupForm !: FormGroup ;
  constructor(private FormBuilder : FormBuilder, private http : HttpClient, private router:Router) {}

  ngOnInit(): void {
    this.signupForm = this.FormBuilder.group({
      fullname:[''],
      email:[''],
      password:[''],
      mobile:[''],
      role:['user']
    })
  }

  signUp(){
    this.http.post<any>("http://localhost:8000/signupUsers",this.signupForm.value)
    .subscribe(res=>{
      alert("SignUp Sucessfull");
      this.signupForm.reset();
      this.router.navigate(['login']);
    },err=>{
    alert("Something Went Wrong")
    })
  }
}
