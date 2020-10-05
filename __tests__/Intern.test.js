const Intern = require('../lib/Intern'); //import "Intern" class
const Employee = require('../lib/Employee'); //import "Employee" class as this is the baseline to inherit from

// Test that Intern generates an object
test ('check that an intern object is created', () => {
    const intern = new Intern();

    expect(typeof(intern)).toBe("object");
});

// Test that when a name is provided to Intern, that it returns the same value for both intern.name and intern.getName()
test ('check the name of the object', () => {
    const intern = new Intern('Megan');
    
    expect(intern.name).toBe('Megan');
});

test('check that the getName object works', () => {
    const intern = new Intern('Megan');

    expect(intern.getName()).toBe('Megan');
});

// Test that when an ID is provided to Intern, that it returns the same value for both intern.id and intern.getID()
test('check that object gets an Id', () => {
    const intern = new Intern('Megan', 'A01');

    expect(intern.id).toBe('A01');
});

test('check that getId works', () => {
    const intern = new Intern('Megan', 'A01');
    expect(intern.getId()).toBe('A01');
});

// Test that when an email is provided to Intern, that it returns the same value for both intern.email and intern.getEmail(), and that it includes an "@" and a ".com"
test('check that object gets an email', () => {
    const intern = new Intern('Megan', 'A01', 'megan@email.com');

    expect(intern.email).toContain('@' && '.com');
    expect(intern.email).toBe('megan@email.com');
});

test('check getEmail works', () => {
    const intern = new Intern('Megan', 'A01', 'megan@email.com');

    expect(intern.getEmail()).toContain('@' && '.com');
    expect(intern.getEmail()).toBe('megan@email.com');
});

// Test that when a School name is provided to Intern, that it returns the same value for both intern.school and intern.getSchool()
test('check that object gets school', () => {
    const intern = new Intern('Megan', 'A01', 'megan@email.com', 'UT Austin');

    expect(intern.school).toBe('UT Austin');
});

test('check that getSchool works', () => {
    const intern = new Intern('Megan', 'A01', 'megan@email.com', 'UT Austin');

    expect(intern.getSchool()).toBe('UT Austin');
});

// Test that intern.role and intern.getRole() returns "Intern"
test('check that object gets a role', () => {
    const intern = new Intern();

    expect(intern.getRole()).toBe('Intern');
})