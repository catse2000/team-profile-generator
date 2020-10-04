const Employee = require('../lib/Employee.js');

//jest.mock('../lib/Employee.js');

test('check if employee object is created', () => {
    const employee = new Employee();

    expect(typeof(employee)).toBe("object");
})

test('check for the name of the object', () => {
    const employee = new Employee('Dave');

    expect(employee.name).toBe('Dave');
});

test('check for the name using the getter method', () => {
    const employee = new Employee('Dave');

    expect(employee.getName()).toBe('Dave');
});

test('check for the role of Employee', () => {
    const employee =  new Employee('Dave', 'A01', 'dave@email.com', "bleh");

    expect(employee.getRole()).toBe('Employee');
})

// test('check if employee object is created', () => {
//     const employee = new Employee();

//     expect(employee.name).toEqual(expect.any(String));
//     expect(employee.id).toEqual(expect.any(String));
//     expect(employee.email).toContain("@" && ".com");
//     //expect(employee.role).toBe("Employee");
//     //console.log(employee.role);
// });

// test('gets employee name', () => {
//     const employee = new Employee();

//     expect(employee.name).toBe('Dave');
// })

// test ('gets employee id', () => {
//     const employee = new Employee();

//     expect(employee.id).toBe('A01');
// })

// test ('gets employee email', () => {
//     const employee = new Employee();

//     expect(employee.email).toBe('dave@email.com');
// })

// // test ('gets employee role', () => {
// //     const employee = new Employee();

// //     expect(employee.role).toEqual(expect.any(String));
// // })




