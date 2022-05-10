"use strict"

import { Console } from "console";

export {}
const ps = require("prompt-sync")
const prompt = ps({sigint:true}) ;

const selectservice:string = prompt("Select 1 to Start  a new Account \n Select 2 for Transaction : ")
let accNum : string ;
if (selectservice === '1' ){
    const selectAccType : string = prompt("Select 1 for a new Savings Account \n Select 2 for a new Current Account : ")

  if(selectAccType === '1'){
      let acc_nm = ( Math.random().toString().substring(2, 14));
      accNum = "Sav" + acc_nm;
   }
  else if(selectAccType === '2'){
  let acc_nm = ( Math.random().toString().substring(2, 14));
  accNum = "Cur" + acc_nm;
 }
else{
  console.log("Invalid input Try again")
}

 const name: string  = prompt ("Enter your Name : ");
 validateName(name)
 const age : number = prompt("Enter your age : ");
 validatteAge(age) 
 const location : string = prompt("enter your country : ");
 validateCountry(location) 
 const state : string = prompt("Enter your state : ");
 validateState(state)
 const country : string = prompt("Enter your Location : ");
 validateLocation(country)
 const email_id : string = prompt("Enter your Email id : "); 
 ValidateEmail(email_id)

  class User{
    protected userName : string;
    protected userAge : number;
    protected userCountry : string;
    protected userState : string;
    protected userLocation : string;
    protected userEmailId : string;
    protected accountNum : string;
  
    constructor(name:string, age:number,country:string,state:string,location:string,email:string,accNum : string){
      this.userName = name; 
      this.userAge = age;
      this.userCountry = country;
      this.userState = state;
      this.userLocation = location;
      this.userEmailId = email;
      this.accountNum = accNum;
    }
  }

  if(validateName(name) && validatteAge(age) && validateCountry(country) && validateState(state) && validateLocation(location) && ValidateEmail(email_id)){
     let newUser = new User(name, age, country, state, location, email_id,accNum);
     console.log("Your Account have been created ")
     console.log("Your Account Details")
     console.log(newUser)
  }
  else {
   console.log("Invalid inputs ! Try Again !")
  }


}
else if(selectservice === '2'){
  console.log("Working on it")
}
else{
  console.log("Oops !! Wrong Entry ")
}

//******************Validation*******************\\ 
function validatteAge(age){
if(age>68){
  console.log("You are not eligible to open an Account")  
  process.exit()
}
else if(age === ''){
  console.log("Age is missing")
  process.exit()
}
else{
  return true
}
}

function validateName(name){
  if(name.length<2){
    console.log("Enter a Valid name")
    process.exit()

  }
  else{
    return true
  }
}

function validateCountry(country){
  if(country.length<2){
    console.log("Enter a Valid country")
    process.exit()

  }
  else{
    return true
  }
}

function validateState(state){
  if(state.length<2 ){
    console.log("Enter a Valid state")
    process.exit()

  }
  else{
    return true
  }
}

function validateLocation(location){
  if(location.length<2){
    console.log("Enter a Valid location")
    process.exit()

  }
  else{
    return true
  }
}

function ValidateEmail(email) {
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))
  {
    return (true)
  }
    console.log("You have entered an invalid email address!")
    process.exit()

}


