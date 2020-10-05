const Employee = require('../lib/Employee.js'); //import "Employee" class

// Test that Employee generates an object
test('check if employee object is created', () => {
    const employee = new Employee();

    expect(typeof(employee)).toBe("object");
});

// Test that when a name is provided to Employee, that it returns the same value for both employee.name and employee.getName()
test('check for the name of the object', () => {
    const employee = new Employee('Dave');

    expect(employee.name).toBe('Dave');
});

test('verify that getName method is outputting name', () => {
    const employee = new Employee('Dave');

    expect(employee.getName()).toBe('Dave');
});

// Test that when an ID is provided to Employee, that it returns the same value for both employee.id and employee.getID()
test('check for the id of the object', () => {
    const employee = new Employee('Dave', 'A01');

    expect(employee.id).toBe('A01');
});

test('check that getID works', () => {
    const employee = new Employee('Dave', 'A01');

    expect(employee.getId()).toBe('A01');
});

// Test that when an email is provided to Employee, that it returns the same value for both employee.email and employee.getEmail(), and that it includes an "@" and a ".com"
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

// Test that employee.role and employee.getRole() returns the default value of "Employee"
test('check for the role of Employee', () => {
    const employee =  new Employee();

    expect(employee.role).toBe("Employee");
    expect(employee.getRole()).toBe('Employee');
});


