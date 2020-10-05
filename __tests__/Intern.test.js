const Intern = require('../lib/Intern');
const Employee = require('../lib/Employee');


test ('check that an intern object is created', () => {
    const intern = new Intern();

    expect(typeof(intern)).toBe("object");
});

test ('check the name of the object', () => {
    const intern = new Intern('Megan');
    
    expect(intern.name).toBe('Megan');
});

test('check that the getName object works', () => {
    const intern = new Intern('Megan');

    expect(intern.getName()).toBe('Megan');
});

test('check that object gets an Id', () => {
    const intern = new Intern('Megan', 'A01');

    expect(intern.id).toBe('A01');
});

test('check that getId works', () => {
    const intern = new Intern('Megan', 'A01');
    expect(intern.getId()).toBe('A01');
});

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

test('check that object gets github', () => {
    const intern = new Intern('Megan', 'A01', 'megan@email.com', 'UT Austin');

    expect(intern.school).toBe('UT Austin');
});

test('check that getGitHub works', () => {
    const intern = new Intern('Megan', 'A01', 'megan@email.com', 'UT Austin');

    expect(intern.getSchool()).toBe('UT Austin');
});

test('check that object gets a role', () => {
    const intern = new Intern();

    expect(intern.getRole()).toBe('Intern');
})