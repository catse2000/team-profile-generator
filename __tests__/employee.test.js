const Employee = require('../lib/Employee.js');

jest.mock('../lib/Employee.js');

test('check if employee object is created', () => {
    const employee = new Employee('Dave');

    expect(employee.name).toBe('Dave');
    expect(employee.id).toBe('A01');
    expect(employee.email).toBe('dave@email.com')
});




