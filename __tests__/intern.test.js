const Intern = require('../lib/Intern.js');

test('can set school from constructor', () => {
    const school = 'ASU';
    const name = 'greg';
    const id = 489;
    const email = 'greg@umn.edu';
    const intern = new Intern(name, id, email, school);

    expect(intern.school).toBe(school);
})

test("gets intern's school from getSchool()", () => {
    const school = 'ASU';
    const name = 'greg';
    const id = 489;
    const email = 'greg@umn.edu';
    const intern = new Intern(name, id, email, school);

    expect(intern.getSchool()).toBe(school);
})

test('getRole() returns "Intern"', () => {
    const string = 'Intern';
    const name = 'Greg';
    const id = 489;
    const email = 'greg@umn.edu';
    const school = 'ASU';
    const intern = new Intern(name, id, email, school);

    expect(intern.getRole()).toBe(string);
})