const Intern = require('../lib/Intern');
const Employee = require('../lib/Employee');

jest.mock('../lib/Intern');

test('creates an intern object', () => {
    const intern = new Intern();

    expect(intern.name).toBe('Megan');
    expect(intern.id).toBe('I01');
    expect(intern.email).toBe('megan@email.com');
    expect(intern.school).toBe('UT Austin');
});