const Manager = require('../lib/Manager.js');

test('can set office number from constructor', () => {
    const officeNumber = 1027;
    const name = 'greg';
    const id = 489;
    const email = 'greg@umn.edu';
    const manager = new Manager(name, id, email, officeNumber);

    expect(manager.officeNumber).toBe(officeNumber);
})

test("gets manager's office number from getOffice()", () => {
    const officeNumber = 1027;
    const name = 'greg';
    const id = 489;
    const email = 'greg@umn.edu';
    const manager = new Manager(name, id, email, officeNumber);

    expect(manager.getOffice()).toBe(officeNumber);
})

test('getRole() returns "Manager"', () => {
    const string = 'Manager';
    const name = 'Greg';
    const id = 489;
    const email = 'greg@umn.edu';
    const officeNumber = 1027;
    const manager = new Manager(name, id, email, officeNumber);

    expect(manager.getRole()).toBe(string);
})