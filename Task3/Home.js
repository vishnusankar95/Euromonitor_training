//import { User } from './Index';
"use strict";
exports.__esModule = true;
var fs = require('fs');
var data = fs.readFileSync('db.json');
var usersList = JSON.parse(data);
var ps = require("prompt-sync");
var prompt = ps({ sigint: true });
//************* Input ****************/
var selectservice = prompt("Select 1 to Start  a new Account \n Select 2 for Transaction : ");
var accountNum;
if (selectservice === '1') {
    var selectAccType = prompt("Select 1 for a new Savings Account \n Select 2 for a new Current Account : ");
    if (selectAccType === '1') {
        var acc_nm = (Math.random().toString().substring(2, 14));
        accountNum = "Sav" + acc_nm;
    }
    else if (selectAccType === '2') {
        var acc_nm = (Math.random().toString().substring(2, 14));
        accountNum = "Cur" + acc_nm;
    }
    else {
        console.log("Invalid input Try again");
    }
    var userName = prompt("Enter your Name : ");
    while (!validateName(userName)) {
        userName = prompt("Please enter a valid Name : ");
    }
    var userAge = prompt("Enter your userAge : ");
    while (!validatteuserAge(userAge)) {
        userAge = prompt("Please enter a valid userAge : ");
    }
    var userLocation = prompt("Enter your  userCountry : ");
    while (!validateName(userLocation)) {
        userLocation = prompt("Please enter a valid  userCountry : ");
    }
    var userState = prompt("Enter your  userState : ");
    while (!validateName(userState)) {
        userState = prompt("Please enter a Valid  userState : ");
    }
    var userCountry = prompt("Enter your  userLocation : ");
    while (!validateName(userCountry)) {
        userCountry = prompt("Please enter a valid  userLocation : ");
    }
    var userEmailId = prompt("Enter your Email id : ");
    while (!ValidateEmail(userEmailId)) {
        userEmailId = prompt("Please Enter a valid Email id : ");
    }
    var deposite = void 0;
    if (selectAccType === "1") {
        var savDepo = prompt("Enter Amount Minimum 500 required for opening Savings Account : ");
        while (savDepo < 500) {
            savDepo = prompt("To open Savings Account, Deposite a minimum of 500 : ");
        }
        deposite = savDepo;
    }
    else if (selectAccType === "2") {
        var curDepo = prompt("Enter Amount Minimum 800 required for opening Savings Account : ");
        while (curDepo < 800) {
            curDepo = prompt("To open Current Account, Deposite a minimum of 800 : ");
        }
        deposite = curDepo;
    }
    //***************Class For Users *******************/
    var User = /** @class */ (function () {
        function User(usrName, userAge, userCountry, userState, userLocation, email, accountNum, depo) {
            this.userName = usrName;
            this.useruserAge = userAge;
            this.userCountry = userCountry;
            this.userState = userState;
            this.userLocation = userLocation;
            this.userEmailId = email;
            this.accountNum = accountNum;
            this.deposite = depo;
        }
        return User;
    }());
    if (validateName(userName) && validatteuserAge(userAge) && validateName(userCountry) && validateName(userState) && validateName(userLocation) && ValidateEmail(userEmailId)) {
        var newUser = new User(userName, userAge, userCountry, userState, userLocation, userEmailId, accountNum, deposite);
        var userDetails = JSON.stringify(newUser);
        fs.writeFile('db.json', userDetails, finished);
        console.log("Your Account have been created ");
        console.log(newUser);
        console.log(usersList);
        function finished(err) {
            console.log("Thank You");
        }
    }
    else {
        console.log("Invalid inputs ! Try Again !");
    }
}
else if (selectservice === '2') {
    console.log("Working on it");
}
else {
    console.log("Oops !! Wrong Entry ");
}
//******************Validation*******************\\ 
function validatteuserAge(userAge) {
    if ((userAge > 68) || (userAge < 10)) {
        console.log("You are not eligible to open an Account");
        process.exit();
    }
    else if (userAge === '') {
        return false;
    }
    else {
        return true;
    }
}
function validateName(name) {
    if (name.length < 2) {
        return false;
    }
    else {
        return true;
    }
}
function ValidateEmail(email) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        return (true);
    }
    return false;
}
