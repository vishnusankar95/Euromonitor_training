var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
function fullname(person) {
    console.log("".concat(person.firstName, " ").concat(person.lastName));
}
var p = {
    firstName: 'Bruse',
    lastName: 'Wayne'
};
fullname(p);
var Employee = /** @class */ (function () {
    function Employee(name) {
        this.employeeName = name;
    }
    Employee.prototype.greet = function () {
        console.log("Welcome ".concat(this.employeeName));
    };
    return Employee;
}());
var emp1 = new Employee('Batman');
emp1.greet();
var Manger = /** @class */ (function (_super) {
    __extends(Manger, _super);
    function Manger(managerName) {
        return _super.call(this, managerName) || this;
    }
    Manger.prototype.greetmanager = function () {
        console.log("Manager at Batman Service");
    };
    return Manger;
}(Employee));
var m1 = new Manger('Alfred');
m1.greet();
m1.greetmanager();
