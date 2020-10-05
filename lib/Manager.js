const Employee = require('./Employee'); //imports "Employee" so that it inherits from it

class Manager extends Employee {
    constructor(name, id, email, office) {
        super(name);
        
        this.name = name;
        this.id = id;
        this.email = email;
        this.office = office;
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

    getOffice() {
        return this.office;
    }
    //returns "Manager" so as to overwrite the default value of "Employee" from the "Employee" parent
    getRole() {
        return "Manager";
    }
}

module.exports = Manager;