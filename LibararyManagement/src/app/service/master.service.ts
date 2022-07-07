import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MasterService {
  user:any;
  isAuthenticated=false;
  isAdmin=false;
  isUser=false;
  response:any;
  data:any;

  constructor(private http:HttpClient,private router:Router) { }

  public authenticateEmployee(data:any)
  {
    console.log(data);
    return this.http.get("http://localhost:8000/signupUsers").subscribe(response=>{
      this.user=response;
      this.data=data;
      this.authenticateUser();
      this.navigateUser();
    })
  }

  authenticateUser()
  {
    this.response=(this.user.find((x:any)=>{
      return x.userName==this.data.email && x.password === this.data.password
    }))
  }

  navigateUser(){
    if(this.response)
    {
      this.checkRole();
    }
    else{
      alert ("Invalid Credential");
    }
  }

  checkRole()
{
  this.isAuthenticated=true;
  console.log(this.response.role)
  if(this.response.role==='admin')
  {
    this.isAdmin=true;
    this.isAuthenticated=true;
    this.router.navigate(['admindashboard']);
  }
  else if(this.response.role==='user')
  {
    this.isUser=true;
    this.isAuthenticated=true;
    this.router.navigate(['userdashboard']);
  }

  else
  {
    alert ("Invalis user");
  }
}
}

