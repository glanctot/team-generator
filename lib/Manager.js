// will extend employee
// in addition to employee property office number
// method getRole() overridden to return manager
// name, title and list el id, email and office number

const Employee = require('./Employee.js');

class Manager extends Employee {
    constructor (name, id, email, officeNumber) {
        super(name, id, email)
        this.officeNumber = officeNumber;
    }
}

Manager.prototype.getOffice = function() {
    return this.officeNumber;
}

Manager.prototype.getRole = function() {
    return 'Manager';
}

module.exports = Manager;