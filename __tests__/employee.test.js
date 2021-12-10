const Employee = require('../lib/Employee.js');

test('creates employee object', () => {
    const employee = new Employee();

    expect(typeof(employee)).toBe('object');
})

test('can set name from constructor', () => {
    const name = 'Greg';
    const employee = new Employee(name);

    expect(employee.name).toBe(name);
})

test('can set id from constructor', () => {
    const name = 'Greg';
    const id = 489;
    const employee = new Employee(name, id);

    expect(employee.id).toBe(id);
})

test('can set email from constructor', () => {
    const name = 'Greg';
    const id = 489;
    const email = 'greg@umn.edu';
    const employee = new Employee(name, id, email);

    expect(employee.email).toBe(email);
})

test("gets employee's name from getName()", () => {
    const name = 'Greg';
    const employee = new Employee(name);

    expect(employee.getName()).toBe(name);
})

test("gets employee's id from getId()", () => {
    const id = 48652;
    const employee = new Employee('Greg', id);

    expect(employee.getId()).toBe(id);
})

test("gets employee's email from getEmail()", () => {
    const email = 'greg@umn.edu';
    const employee = new Employee('Greg', 1, email);

    expect(employee.getEmail()).toBe(email);
})

test('getRole() returns "Employee"', () => {
    const string = 'Employee';
    const name = 'Greg';
    const id = 489;
    const email = 'greg@umn.edu';
    const employee = new Employee(name, id, email);

    expect(employee.getRole()).toBe(string);
})