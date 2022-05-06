"use strict";
exports.__esModule = true;
var ps = require("prompt-sync");
var prompt = ps({ sigint: true });
var name = prompt("Enter your Name : ");
//console.log(`Hello ${name}`)
var age = prompt("Enter your age : ");
var location = prompt("enter your country : ");
var state = prompt("Enter your state : ");
var country = prompt("Enter your Location : ");
var email_id = prompt("Enter your Email id : ");
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
var User = /** @class */ (function () {
    function User(name, age, country, state, location, email) {
        this.userName = name;
        this.userAge = age;
        this.userCountry = country;
        this.userState = state;
        this.userLocation = location;
        this.userEmailId = email;
    }
    return User;
}());
var newUser = new User(name, age, country, state, location, email_id);
console.log("new", newUser);
