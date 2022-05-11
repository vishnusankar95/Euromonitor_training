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

 let name: string  = prompt ("Enter your Name : ");
 while(!validateName(name)){
  name = prompt ("Please enter a valid Name : ");
 }
 let age : number = prompt("Enter your Age : ");
 while(!validatteAge(age)){
   age = prompt("Please enter a valid Age : ");
 } 
 let location : string = prompt("Enter your Country : ");
 while(!validateName(location)){
   location = prompt("Please enter a valid Country : ")
 }
 let state : string = prompt("Enter your State : ");
 while(!validateName(state)){
  state = prompt("Please enter a Valid State : ")
 }
 let country : string = prompt("Enter your Location : ");
 while(!validateName(country)){
   country = prompt("Please enter a valid Location : ")
 }
 let email_id : string = prompt("Enter your Email id : "); 
 while(!ValidateEmail(email_id)){
   email_id = prompt("Please Enter a valid Email id : ")
 }
 let deposite : number;
 if(selectAccType==="1"){
  let savDepo = prompt("Enter Amount Minimum 500 required for opening Savings Account : ")
    while(savDepo < 500){
      savDepo =prompt("To open Savings Account, Deposite a minimum of 500 : ")
    }
      deposite = savDepo;
 }
 else if(selectAccType==="2"){
  let curDepo = prompt("Enter Amount Minimum 800 required for opening Savings Account : ")
  while(curDepo < 800){
    curDepo= prompt("To open Current Account, Deposite a minimum of 800 : ")
  }
    deposite = curDepo;
 }

  class User{
    protected userName : string;
    protected userAge : number;
    protected userCountry : string;
    protected userState : string;
    protected userLocation : string;
    protected userEmailId : string;
    protected accountNum : string;
    protected deposite : number;
  
    constructor(name:string, age:number,country:string,state:string,location:string,email:string,accNum : string, depo:number){
      this.userName = name; 
      this.userAge = age;
      this.userCountry = country;
      this.userState = state;
      this.userLocation = location;
      this.userEmailId = email;
      this.accountNum = accNum;
      this.deposite = depo;

    }
  }

  if(validateName(name) && validatteAge(age) && validateName(country) && validateName(state) && validateName(location) && ValidateEmail(email_id)){
     let newUser = new User(name, age, country, state, location, email_id,accNum,deposite);
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
if((age>68) || (age <10 )){
  console.log("You are not eligible to open an Account")  
  process.exit()
}
else if(age === ''){
   return false;
}
else{
  return true
}
}

function validateName(name){
  if(name.length<2){
    return false;
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
   return false
}


