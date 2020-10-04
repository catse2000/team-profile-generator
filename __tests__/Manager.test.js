const Manager = require('../lib/Manager');
const Employee = require('../lib/Employee');

jest.mock('../lib/Manager');

test('creates a Manager Object', () => {
    const manager = new Manager();

    expect(manager.name).toBe('Carol');
    expect(manager.id).toBe('M01');
    expect(manager.email).toBe('carol@email.com');
    expect(manager.office).toBe('001');
})