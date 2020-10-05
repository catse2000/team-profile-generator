class Employee { //this object is created containing name, id, email, and role, which is the default for other classes
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = this.getRole();
    }
    // these methods can be used to return information
    getName () {
        return this.name;
    }

    getId () {
        return this.id;
    }

    getEmail () {
        return this.email;
    }

    getRole(){
        return "Employee";
    }
}

module.exports = Employee;