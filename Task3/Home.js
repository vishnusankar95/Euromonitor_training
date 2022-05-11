"use strict";
exports.__esModule = true;
var ps = require("prompt-sync");
var prompt = ps({ sigint: true });
var selectservice = prompt("Select 1 to Start  a new Account \n Select 2 for Transaction : ");
var accNum;
if (selectservice === '1') {
    var selectAccType = prompt("Select 1 for a new Savings Account \n Select 2 for a new Current Account : ");
    if (selectAccType === '1') {
        var acc_nm = (Math.random().toString().substring(2, 14));
        accNum = "Sav" + acc_nm;
    }
    else if (selectAccType === '2') {
        var acc_nm = (Math.random().toString().substring(2, 14));
        accNum = "Cur" + acc_nm;
    }
    else {
        console.log("Invalid input Try again");
    }
    var name_1 = prompt("Enter your Name : ");
    while (!validateName(name_1)) {
        name_1 = prompt("Please enter a valid Name : ");
    }
    var age = prompt("Enter your Age : ");
    while (!validatteAge(age)) {
        age = prompt("Please enter a valid Age : ");
    }
    var location_1 = prompt("Enter your Country : ");
    while (!validateName(location_1)) {
        location_1 = prompt("Please enter a valid Country : ");
    }
    var state = prompt("Enter your State : ");
    while (!validateName(state)) {
        state = prompt("Please enter a Valid State : ");
    }
    var country = prompt("Enter your Location : ");
    while (!validateName(country)) {
        country = prompt("Please enter a valid Location : ");
    }
    var email_id = prompt("Enter your Email id : ");
    while (!ValidateEmail(email_id)) {
        email_id = prompt("Please Enter a valid Email id : ");
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
    var User = /** @class */ (function () {
        function User(name, age, country, state, location, email, accNum, depo) {
            this.userName = name;
            this.userAge = age;
            this.userCountry = country;
            this.userState = state;
            this.userLocation = location;
            this.userEmailId = email;
            this.accountNum = accNum;
            this.deposite = depo;
        }
        return User;
    }());
    if (validateName(name_1) && validatteAge(age) && validateName(country) && validateName(state) && validateName(location_1) && ValidateEmail(email_id)) {
        var newUser = new User(name_1, age, country, state, location_1, email_id, accNum, deposite);
        console.log("Your Account have been created ");
        console.log("Your Account Details");
        console.log(newUser);
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
function validatteAge(age) {
    if ((age > 68) || (age < 10)) {
        console.log("You are not eligible to open an Account");
        process.exit();
    }
    else if (age === '') {
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
