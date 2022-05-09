"use strict";
exports.__esModule = true;
var ps = require("prompt-sync");
var prompt = ps({ sigint: true });
var selectservice = prompt("Select 1 to Start  a new Account \n Slect 2 for Transaction : ");
if (selectservice === "1") {
    var name_1 = prompt("Enter your Name : ");
    var age = prompt("Enter your age : ");
    var location_1 = prompt("enter your country : ");
    var state = prompt("Enter your state : ");
    var country = prompt("Enter your Location : ");
    var email_id = prompt("Enter your Email id : ");
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
    if (validator(name_1, age, country, state, location_1, email_id)) {
        var newUser = new User(name_1, age, country, state, location_1, email_id);
        console.log("new", newUser);
    }
    else {
        console.log("Try Again ");
    }
}
function validator(name, age, country, state, location, email_id) {
    if (!validateName(name) || !validatteAge(age) || !validateCountry(country) || !validateState(state) || !validateLocation(location) || !ValidateEmail(email_id)) {
        //submitOk = false;
        console.log("Please fill with valid details.");
        return false;
    }
}
function validatteAge(age) {
    if (age > 68) {
        console.log("You are not eligible to open an Account");
        return false;
    }
    else if (age === 0 || age === '') {
        console.log("Age is missing");
        return false;
    }
    else {
        return true;
    }
}
function validateName(name) {
    if (name.length < 2 || name == '') {
        console.log("Enter a Valid name");
        return false;
    }
    else {
        return true;
    }
}
function validateCountry(country) {
    if (country.length < 2 || country == '') {
        console.log("Enter a Valid country");
        return false;
    }
    else {
        return true;
    }
}
function validateState(state) {
    if (state.length < 2 || state == '') {
        console.log("Enter a Valid state");
        return false;
    }
    else {
        return true;
    }
}
function validateLocation(location) {
    if (location.length < 2 || location == '') {
        console.log("Enter a Valid location");
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
    console.log("You have entered an invalid email address!");
    return (false);
}
