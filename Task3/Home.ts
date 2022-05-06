"use strict"
export {}
const ps = require("prompt-sync")
const prompt = ps({sigint:true}) ;

const name  = prompt ("Enter your Name : ");
 //console.log(`Hello ${name}`)
 const age = prompt("Enter your age : ");

 const location = prompt("enter your country : ");

 const state = prompt("Enter your state : ");

 const country = prompt("Enter your Location : ");

 const email_id = prompt("Enter your Email id : "); 


//  function display(name : string,age : number,location : string,state : string,country : string,email_id : string){
//   //  if(name === "" || name === null){
//   //      name = prompt("Enter your Name")
//   //  }
//   //  if(age === 0 || age === null){
//   //      age = prompt("Enter your Age")
//   //  }
//   console.log("Name : ",name)
//   console.log("Age : ",age)
//   console.log("Country : ",location)
//   console.log("State : ",state)
//   console.log("Location : ",country)
//   console.log("Email Id : ",email_id)
//  }

//  display(name,age,location,state,country,email_id)


class User{
  protected userName : string;
  protected userAge : number;
  protected userCountry : string;
  protected userState : string;
  protected userLocation : string;
  protected userEmailId : string;

  constructor(name:string, age:number,country:string,state:string,location:string,email:string){
    this.userName = name; 
    this.userAge = age;
    this.userCountry = country;
    this.userState = state;
    this.userLocation = location;
    this.userEmailId = email;
  }
}

let newUser = new User(name,age,country,state,location,email_id)
console.log("new",newUser)