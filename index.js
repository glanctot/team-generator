const inquirer = require('inquirer');
const fs = require('fs');

const Engineer = require('./lib/Engineer.js');
const Manager = require('./lib/Manager.js');
const Intern = require('./lib/Intern.js');

const team = [];

const managerQuestions = managerData => {
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'name',
            message: "What is the manager's name?",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter the manager name');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the manager's employee ID?",
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log('Please enter the employee ID of the manager.');
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the manager's email?",
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter the email of the manager.');
                }
            }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "What is the manager's office number?",
            validate: officeInput => {
                if (officeInput) {
                    return true;
                } else {
                    console.log('Please enter the office number of the manager.');
                }
            }
        }
    ])
    .then(managerData => {
        manager = new Manager(managerData.name, managerData.id, managerData.email, managerData.officeNumber);
        team.push(manager);
    })
}

const addQuestion = () => {
    return inquirer.prompt ([
        {
            type: 'list',
            name: 'role',
            message: "Who would you like to add?",
            choices: ["Engineer", "Intern", "Done Adding"]
        }
    ])
    .then(addData => {
        if (addData.role === 'Engineer') {
            engineerQuestions();
        } else if (addData.role === 'Intern') {
            // internQuestions();
        } else {
            // writeFile();
        }
    })
}

const engineerQuestions = engineerData => {
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'name',
            message: "What is the engineer's name?",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter the engineer's name");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the engineer's employee ID?",
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log('Please enter the employee ID of the engineer.');
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the engineer's email?",
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter the email of the engineer.');
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: "What is the engineer's GitHub username?",
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log("Please enter the engineer's GitHub username.");
                }
            }
        }
    ])
    .then(engineerData => {
        engineer = new Engineer(engineerData.name, engineerData.id, engineerData.email, engineerData.github);
        team.push(engineer);
        addQuestion();
    })
}

const internQuestions = internData => {
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'name',
            message: "What is the intern's name?",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter the intern's name");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the intern's employee ID?",
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log('Please enter the employee ID of the intern.');
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the intern's email?",
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter the email of the intern.');
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: "What school is the intern attending?",
            validate: schoolInput => {
                if (schoolInput) {
                    return true;
                } else {
                    console.log("Please enter the school the intern is attending.");
                }
            }
        }
    ])
    .then(internData => {
        intern = new Intern(internData.name, internData.id, internData.email, internData.school);
        team.push(intern);
        addQuestion();
    })
}


managerQuestions()
    .then(addQuestion);