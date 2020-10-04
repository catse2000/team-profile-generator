const Manager = require('../lib/Manager');
const Employee = require('../lib/Employee');

jest.mock('../lib/Manager');

test('creates a Manager Object', () => {
    const manager = new Manager();

    expect(manager.name).toEqual(expect.any(String));
    expect(manager.id).toEqual(expect.any(String));
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.office).toEqual(expect.any(String));
})