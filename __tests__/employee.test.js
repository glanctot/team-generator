const Employee = require('../lib/Employee.js');
jest.mock('../lib/Employee.js');
console.log(new Employee());

test('creates employee object', () => {
    const employee = new Employee('Greg');

    expect(employee.name).toBe('Greg');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
})