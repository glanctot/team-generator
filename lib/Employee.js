// parent class with following properties: name, id, email
// has following methods: getName(), getId(), getEmail(), getRole() returns employee
const inquirer = require('inquirer');

class Employee {
    constructor (name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
}

Employee.prototype.getName = function() {
    return this.name;
}

Employee.prototype.getId = function() {
    return this.id;
}

Employee.prototype.getEmail = function() {
    return this.email;
}

Employee.prototype.getRole = function() {
    return 'Employee';
}

module.exports = Employee;