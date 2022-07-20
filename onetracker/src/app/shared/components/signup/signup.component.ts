import { Component, OnInit } from '@angular/core';
import {UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import { Route, Router } from '@angular/router';

import {ErrorStateMatcher} from '@angular/material/core';
import { HttpClient } from '@angular/common/http';

export class MyErrorStateMatcher implements ErrorStateMatcher {
isErrorState(control: UntypedFormControl | null, form: FormGroupDirective | NgForm | null): boolean {
  const isSubmitted = form && form.submitted;
  return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
}
}

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm !: UntypedFormGroup ;
  constructor(private FormBuilder : UntypedFormBuilder, private http : HttpClient, private router:Router) {}

  emailFormControl = new UntypedFormControl('', [Validators.required, Validators.email]);

  matcher = new MyErrorStateMatcher();

  ngOnInit(): void {
    this.signupForm = this.FormBuilder.group({
      fullname:[''],
      mobile:[''],
      email:[''],
      password:[''],
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
