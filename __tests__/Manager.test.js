const Manager = require('../lib/Manager'); //import "Manager" class
const Employee = require('../lib/Employee'); //import "Employee" class as this is the baseline to inherit from

// Test that Manager generates an object
test ('check that an Manager object is created', () => {
    const manager = new Manager();

    expect(typeof(manager)).toBe("object");
});

// Test that when a name is provided to Manager, that it returns the same value for both manager.name and manager.getName()
test ('check the name of the object', () => {
    const manager = new Manager('Megan');
    
    expect(manager.name).toBe('Megan');
});

test('check that the getName object works', () => {
    const manager = new Manager('Megan');

    expect(manager.getName()).toBe('Megan');
});

// Test that when a ID is provided to Manager, that it returns the same value for both manager.id and manager.getID()
test('check that object gets an Id', () => {
    const manager = new Manager('Megan', 'A01');

    expect(manager.id).toBe('A01');
});

test('check that getId works', () => {
    const manager = new Manager('Megan', 'A01');
    expect(manager.getId()).toBe('A01');
});

// Test that when an email is provided to Manager, that it returns the same value for both manager.email and manager.getEmail(), and that it includes an "@" and a ".com"
test('check that object gets an email', () => {
    const manager = new Manager('Megan', 'A01', 'megan@email.com');

    expect(manager.email).toContain('@' && '.com');
    expect(manager.email).toBe('megan@email.com');
});

test('check getEmail works', () => {
    const manager = new Manager('Megan', 'A01', 'megan@email.com');

    expect(manager.getEmail()).toContain('@' && '.com');
    expect(manager.getEmail()).toBe('megan@email.com');
});

// Test that when an office number is provided to Manager, that it returns the same value for both manager.office and manager.getOffice()
test('check that object gets office', () => {
    const manager = new Manager('Megan', 'A01', 'megan@email.com', 'office');

    expect(manager.office).toBe("office");
});

test('check that getOffice works', () => {
    const manager = new Manager('Megan', 'A01', 'megan@email.com', 'office');

    expect(manager.getOffice()).toBe('office');
});

// Test that manager.role and manager.getRole() returns "Manager"
test('check that object gets a role', () => {
    const manager = new Manager();

    expect(manager.getRole()).toBe('Manager');
})