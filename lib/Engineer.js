const Employee = require('./Employee'); //imports "Employee" so that it inherits from it

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name);
        
        this.name = name;
        this.id = id;
        this.email = email;
        this.github = github;
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

    getGitHub() {
        return this.github;
    }
    //returns "Engineer" so as to overwrite the default value of "Employee" from the "Employee" parent
    getRole() {
        return "Engineer";
    }
}

module.exports = Engineer;