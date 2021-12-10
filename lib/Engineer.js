// will extend employee
// in addition to employee will also have property github(github username)
// methods: getGithub() getRole() overridden to return engineer

// name, next line title, list el of id, email and github
const Employee = require('./Employee.js');

class Engineer extends Employee {
    constructor (name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }
}

Engineer.prototype.getGithub = function() {
    return this.github;
}

Engineer.prototype.getRole = function() {
    return 'Engineer';
}

module.exports = Engineer;