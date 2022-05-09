"use strict"
export {}
const ps = require("prompt-sync")
const prompt = ps({sigint:true}) ;

const selectservice:string = prompt("Select 1 to Start  a new Account \n Slect 2 for Transaction : ")

if (selectservice === "1" ){
const name  = prompt ("Enter your Name : ");

 const age = prompt("Enter your age : ");
 
 const location = prompt("enter your country : ");

 const state = prompt("Enter your state : ");

 const country = prompt("Enter your Location : ");

 const email_id = prompt("Enter your Email id : "); 

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

if(validator(name,age,country,state,location,email_id)){
  
let newUser = new User(name,age,country,state,location,email_id)
console.log("new",newUser)
}
else{
  console.log("Try Again ")
}


}

function validator(name,age,country,state,location,email_id){
  if(!validateName(name) || !validatteAge(age) || !validateCountry(country) || !validateState(state) || !validateLocation(location) || !ValidateEmail(email_id)){
    //submitOk = false;
    console.log("Please fill with valid details.");
    return false
  }
}

function validatteAge(age){
if(age>68){
  console.log("You are not eligible to open an Account")
  return false
}
else if(age === 0 || age === ''){
  console.log("Age is missing")
  return false
}
else{
  return true
}
}

function validateName(name){
  if(name.length<2 || name == ''){
    console.log("Enter a Valid name")
    return false
  }
  else{
    return true
  }
}

function validateCountry(country){
  if(country.length<2 || country == ''){
    console.log("Enter a Valid country")
    return false
  }
  else{
    return true
  }
}

function validateState(state){
  if(state.length<2 || state == ''){
    console.log("Enter a Valid state")
    return false
  }
  else{
    return true
  }
}

function validateLocation(location){
  if(location.length<2 || location == ''){
    console.log("Enter a Valid location")
    return false
  }
  else{
    return true
  }
}

function ValidateEmail(email) 
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))
  {
    return (true)
  }
    console.log("You have entered an invalid email address!")
    return (false)
}