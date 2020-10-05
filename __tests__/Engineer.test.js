const Engineer = require('../lib/Engineer'); //import "Engineer" class
const Employee = require('../lib/Employee'); //import "Employee" class as this is the baseline to inherit from

// Test that Engineer generates an object
test ('check that an Engineer object is created', () => {
    const engineer = new Engineer();

    expect(typeof(engineer)).toBe("object");
});

// Test that when a name is provided to Engineer, that it returns the same value for both engineer.name and engineer.getName()
test ('check the name of the object', () => {
    const engineer = new Engineer('Megan');
    
    expect(engineer.name).toBe('Megan');
});

test('check that the getName object works', () => {
    const engineer = new Engineer('Megan');

    expect(engineer.getName()).toBe('Megan');
});

// Test that when an ID is provided to Engineer, that it returns the same value for both engineer.id and engineer.getID()
test('check that object gets an Id', () => {
    const engineer = new Engineer('Megan', 'A01');

    expect(engineer.id).toBe('A01');
});

test('check that getId works', () => {
    const engineer = new Engineer('Megan', 'A01');
    expect(engineer.getId()).toBe('A01');
});

// Test that when an email is provided to Engineer, that it returns the same value for both engineer.email and engineer.getEmail(), and that it includes an "@" and a ".com"
test('check that object gets an email', () => {
    const engineer = new Engineer('Megan', 'A01', 'megan@email.com');

    expect(engineer.email).toContain('@' && '.com');
    expect(engineer.email).toBe('megan@email.com');
});

test('check getEmail works', () => {
    const engineer = new Engineer('Megan', 'A01', 'megan@email.com');

    expect(engineer.getEmail()).toContain('@' && '.com');
    expect(engineer.getEmail()).toBe('megan@email.com');
});

// Test that when a github username is provided to Engineer, that it returns the same value for both engineer.github and engineer.getGitHub()
test('check that object gets github', () => {
    const engineer = new Engineer('Megan', 'A01', 'megan@email.com', 'megan');

    expect(engineer.github).toBe('megan');
});

test('check that getGitHub works', () => {
    const engineer = new Engineer('Megan', 'A01', 'megan@email.com', 'megan');

    expect(engineer.getGitHub()).toBe('megan');
});

// Test that engineer.role and engineer.getRole() returns "Engineer"
test('check that object gets a role', () => {
    const engineer = new Engineer();

    expect(engineer.getRole()).toBe('Engineer');
})