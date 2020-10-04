const Engineer = require('../lib/Engineer');
const Employee = require('../lib/Employee');

jest.mock('../lib/Engineer');

test ('check that an Engineer object is created', () => {
    const engineer = new Engineer();

    expect(engineer.name).toEqual(expect.any(String));
    expect(engineer.id).toEqual(expect.any(String));
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.github).toEqual(expect.any(String));
});