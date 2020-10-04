const Employee = require('./Employee');

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

    getRole() {
        return "Manager";
    }
}

module.exports = Manager;