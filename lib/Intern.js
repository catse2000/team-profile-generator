const Employee = require('./Employee');

class Intern extends Employee {
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

    getRole() {
        return "Intern";
    }
}

module.exports = Intern;