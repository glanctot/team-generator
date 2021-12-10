const Engineer = require('../lib/Engineer.js');

test('can set github from constructor', () => {
    const github = 'glanctot';
    const name = 'greg';
    const id = 489;
    const email = 'greg@umn.edu';
    const engineer = new Engineer(name, id, email, github);

    expect(engineer.github).toBe(github);
})

test("gets engineer's github from getGithub()", () => {
    const github = 'glanctot';
    const name = 'greg';
    const id = 489;
    const email = 'greg@umn.edu';
    const engineer = new Engineer(name, id, email, github);

    expect(engineer.getGithub()).toBe(github);
})

test('getRole() returns "Engineer"', () => {
    const string = 'Engineer';
    const name = 'Greg';
    const id = 489;
    const email = 'greg@umn.edu';
    const github = 'glanctot';
    const employee = new Engineer(name, id, email, github);

    expect(employee.getRole()).toBe(string);
})