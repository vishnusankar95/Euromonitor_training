//import { User } from './Index';

"use strict"

import { json } from "stream/consumers"

export {}
var fs = require('fs')
var data = fs.readFileSync('db.json')
var usersList = JSON.parse(data)

const ps = require("prompt-sync")
const prompt = ps({sigint:true}) ;

//************* Input ****************/

const selectservice:string = prompt("Select 1 to Start  a new Account \n Select 2 for Transaction : ")
let  accountNum : string ;
if (selectservice === '1' ){
    const selectAccType : string = prompt("Select 1 for a new Savings Account \n Select 2 for a new Current Account : ")

  if(selectAccType === '1'){
      let acc_nm = ( Math.random().toString().substring(2, 14));
       accountNum = "Sav" + acc_nm;
   }
  else if(selectAccType === '2'){
  let acc_nm = ( Math.random().toString().substring(2, 14));
   accountNum = "Cur" + acc_nm;
 }
else{
  console.log("Invalid input Try again")
}

 let  userName: string  = prompt ("Enter your Name : ");
 while(!validateName( userName)){
  userName = prompt ("Please enter a valid Name : ");
 }
 let userAge : number = prompt("Enter your userAge : ");
 while(!validatteuserAge(userAge)){
   userAge = prompt("Please enter a valid userAge : ");
 } 
 let  userLocation : string = prompt("Enter your  userCountry : ");
 while(!validateName( userLocation)){
    userLocation = prompt("Please enter a valid  userCountry : ")
 }
 let  userState : string = prompt("Enter your  userState : ");
 while(!validateName( userState)){
   userState = prompt("Please enter a Valid  userState : ")
 }
 let  userCountry : string = prompt("Enter your  userLocation : ");
 while(!validateName( userCountry)){
    userCountry = prompt("Please enter a valid  userLocation : ")
 }
 let  userEmailId : string = prompt("Enter your Email id : "); 
 while(!ValidateEmail( userEmailId)){
    userEmailId = prompt("Please Enter a valid Email id : ")
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
 
 //***************Class For Users *******************/
  class User{
    protected userName : string;
    protected useruserAge : number;
    protected userCountry : string;
    protected userState : string;
    protected userLocation : string;
    protected userEmailId : string;
    protected accountNum : string;
    protected deposite : number;
  
    constructor(usrName:string, userAge:number, userCountry:string, userState:string, userLocation:string,email:string, accountNum : string, depo:number){
      this.userName = usrName; 
      this.useruserAge = userAge;
      this.userCountry =  userCountry;
      this.userState =  userState;
      this.userLocation =  userLocation;
      this.userEmailId = email;
      this.accountNum =  accountNum;
      this.deposite = depo;

    }
  }

  if(validateName( userName) && validatteuserAge(userAge) && validateName( userCountry) && validateName( userState) && validateName( userLocation) && ValidateEmail( userEmailId)){
    let newUser = new User(userName, userAge, userCountry, userState, userLocation, userEmailId,accountNum,deposite);
    let userDetails = JSON.stringify(newUser)
    fs.writeFile('db.json',userDetails,finished)
      console.log("Your Account have been created ")
      console.log(newUser)
      console.log(usersList)
     function finished(err){
       console.log("Thank You")
     }
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
function validatteuserAge(userAge){
if((userAge>68) || (userAge <10 )){
  console.log("You are not eligible to open an Account")  
  process.exit()
}
else if(userAge === ''){
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


