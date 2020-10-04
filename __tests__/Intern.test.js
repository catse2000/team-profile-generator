const Intern = require('../lib/Intern');
const Employee = require('../lib/Employee');

jest.mock('../lib/Intern');

test('creates an intern object', () => {
    const intern = new Intern();

    expect(intern.name).toEqual(expect.any(String));
    expect(intern.id).toEqual(expect.any(String));
    expect(intern.email).toEqual(expect.any(String));
    expect(intern.school).toEqual(expect.any(String));
});