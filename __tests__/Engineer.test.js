const Engineer = require('../lib/Engineer');
const Employee = require('../lib/Employee');

jest.mock('../lib/Engineer');

test ('check that an Engineer object is created', () => {
    const engineer = new Engineer();

    expect(engineer.name).toBe('Steve');
    expect(engineer.id).toBe('E01');
    expect(engineer.email).toBe('steve@email.com');
    expect(engineer.github).toBe('github.com/steve');
});