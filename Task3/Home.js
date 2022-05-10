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
    validateName(name_1);
    var age = prompt("Enter your age : ");
    validatteAge(age);
    var location_1 = prompt("enter your country : ");
    validateCountry(location_1);
    var state = prompt("Enter your state : ");
    validateState(state);
    var country = prompt("Enter your Location : ");
    validateLocation(country);
    var email_id = prompt("Enter your Email id : ");
    ValidateEmail(email_id);
    var User = /** @class */ (function () {
        function User(name, age, country, state, location, email, accNum) {
            this.userName = name;
            this.userAge = age;
            this.userCountry = country;
            this.userState = state;
            this.userLocation = location;
            this.userEmailId = email;
            this.accountNum = accNum;
        }
        return User;
    }());
    if (validateName(name_1) && validatteAge(age) && validateCountry(country) && validateState(state) && validateLocation(location_1) && ValidateEmail(email_id)) {
        var newUser = new User(name_1, age, country, state, location_1, email_id, accNum);
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
    if (age > 68) {
        console.log("You are not eligible to open an Account");
        process.exit();
    }
    else if (age === '') {
        console.log("Age is missing");
        process.exit();
    }
    else {
        return true;
    }
}
function validateName(name) {
    if (name.length < 2) {
        console.log("Enter a Valid name");
        process.exit();
    }
    else {
        return true;
    }
}
function validateCountry(country) {
    if (country.length < 2) {
        console.log("Enter a Valid country");
        process.exit();
    }
    else {
        return true;
    }
}
function validateState(state) {
    if (state.length < 2) {
        console.log("Enter a Valid state");
        process.exit();
    }
    else {
        return true;
    }
}
function validateLocation(location) {
    if (location.length < 2) {
        console.log("Enter a Valid location");
        process.exit();
    }
    else {
        return true;
    }
}
function ValidateEmail(email) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        return (true);
    }
    console.log("You have entered an invalid email address!");
    process.exit();
}
