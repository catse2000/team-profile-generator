const Engineer = require('../lib/Engineer');
const Employee = require('../lib/Employee');


test ('check that an Engineer object is created', () => {
    const engineer = new Engineer();

    expect(typeof(engineer)).toBe("object");
});

test ('check the name of the object', () => {
    const engineer = new Engineer('Megan');
    
    expect(engineer.name).toBe('Megan');
});

test('check that the getName object works', () => {
    const engineer = new Engineer('Megan');

    expect(engineer.getName()).toBe('Megan');
});

test('check that object gets an Id', () => {
    const engineer = new Engineer('Megan', 'A01');

    expect(engineer.id).toBe('A01');
});

test('check that getId works', () => {
    const engineer = new Engineer('Megan', 'A01');
    expect(engineer.getId()).toBe('A01');
});

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

test('check that object gets github', () => {
    const engineer = new Engineer('Megan', 'A01', 'megan@email.com', 'https://github.com/megan');

    expect(engineer.github).toContain('https://github.com/');
    expect(engineer.github).toContain('https://github.com/megan');
});

test('check that getGitHub works', () => {
    const engineer = new Engineer('Megan', 'A01', 'megan@email.com', 'https://github.com/megan');

    expect(engineer.getGitHub()).toContain('https://github.com/');
    expect(engineer.getGitHub()).toContain('https://github.com/megan');
});

test('check that object gets a role', () => {
    const engineer = new Engineer();

    expect(engineer.getRole()).toBe('Engineer');
})