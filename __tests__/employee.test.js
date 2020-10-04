const Employee = require('../lib/Employee.js');

jest.mock('../lib/Employee.js');

test('check if employee object is created', () => {
    const employee = new Employee();

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(String));
    expect(employee.email).toEqual(expect.any(String));

});

