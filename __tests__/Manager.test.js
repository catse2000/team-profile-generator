const Manager = require('../lib/Manager');
const Employee = require('../lib/Employee');


test ('check that an Manager object is created', () => {
    const manager = new Manager();

    expect(typeof(manager)).toBe("object");
});

test ('check the name of the object', () => {
    const manager = new Manager('Megan');
    
    expect(manager.name).toBe('Megan');
});

test('check that the getName object works', () => {
    const manager = new Manager('Megan');

    expect(manager.getName()).toBe('Megan');
});

test('check that object gets an Id', () => {
    const manager = new Manager('Megan', 'A01');

    expect(manager.id).toBe('A01');
});

test('check that getId works', () => {
    const manager = new Manager('Megan', 'A01');
    expect(manager.getId()).toBe('A01');
});

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

test('check that object gets github', () => {
    const manager = new Manager('Megan', 'A01', 'megan@email.com', 'office');

    expect(manager.office).toBe("office");
});

test('check that getGitHub works', () => {
    const manager = new Manager('Megan', 'A01', 'megan@email.com', 'office');

    expect(manager.getOffice()).toBe('office');
});

test('check that object gets a role', () => {
    const manager = new Manager();

    expect(manager.getRole()).toBe('Manager');
})