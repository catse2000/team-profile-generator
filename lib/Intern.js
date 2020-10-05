const Employee = require('./Employee'); //imports "Employee" so that it inherits from it

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name);
        
        this.name = name;
        this.id = id;
        this.email = email;
        this.school = school;
        this.role = this.getRole();
    }

    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getSchool() {
        return this.school;
    }
    //returns "Intern" so as to overwrite the default value of "Employee" from the "Employee" parent
    getRole() {
        return "Intern";
    }
}

module.exports = Intern;