class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = this.getRole();
    }

    getName (name) {
        this.name = name;
        return this.name;
    }

    getId (id) {
        this.id = id;
        return this.id;
    }

    getEmail (email) {
        this.email = email;
        return this.email;
    }

    getRole(){
        return "Employee";
    }
}

module.exports = Employee;