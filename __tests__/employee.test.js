const { dir } = require('console');
const Employee = require('../lib/Employee.js');

test('check if employee object is created', () => {
    const employee = new Employee();

    expect(typeof(employee)).toBe("object");
});

test('check for the name of the object', () => {
    const employee = new Employee('Dave');

    expect(employee.name).toBe('Dave');
});

test('verify that getName method is outputting name', () => {
    const employee = new Employee('Dave');

    expect(employee.getName()).toBe('Dave');
});

test('check for the id of the object', () => {
    const employee = new Employee('Dave', 'A01');

    expect(employee.id).toBe('A01');
});

test('check that getID works', () => {
    const employee = new Employee('Dave', 'A01');

    expect(employee.getId()).toBe('A01');
});

test('check for the email of the object', () => {
    const employee = new Employee('Dave', 'A01', 'dave@email.com');

    expect(employee.email).toContain('@' && '.com');
    expect(employee.email).toBe('dave@email.com');
});

test('check that getEmail works', () => {
    const employee = new Employee('Dave', 'A01', 'dave@email.com');

    expect(employee.getEmail()).toContain('@' && '.com');
    expect(employee.getEmail()).toBe('dave@email.com');
})

test('check for the role of Employee', () => {
    const employee =  new Employee();

    expect(employee.getRole()).toBe('Employee');
});


