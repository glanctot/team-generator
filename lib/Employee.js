// parent class with following properties: name, id, email
// has following methods: getName(), getId(), getEmail(), getRole() returns employee
const inquirer = require('inquirer');

function Employee(name = '') {
    this.name = name;
    this.id = 450;
    this.email = 'gregory.lanctot28@gmail.com'
}

module.exports = Employee;