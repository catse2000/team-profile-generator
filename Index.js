const inquirer = require('inquirer');
const generatePage = require('./src/page-template.js');
const { writeFile } = require('./utils/generate-site.js');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const promptEmployees = teamData => {
    if (!teamData){
        teamData = [];
    };

    return inquirer.prompt([
        {
            type: 'list',
            name: 'role',
            message: "What is this employee's role?",
            choices: ["Manager", "Engineer", "Intern"],
        },
        {
            type: 'input',
            name: 'name',
            message: "What is this employee's name? (Required)",
            validate: inputName => {
                if(inputName) {
                    return true;
                }
                else{
                    console.log ("Please enter the employee's name.");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the employee's ID Number? (Required)",
            validate: inputID => {
                if(inputID) {
                    return true;
                }
                else {
                    console.log("Please enter an ID.");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the employee's email address? (Required)",
            validate: inputEmail => {
                if(inputEmail) {
                    return true;
                }
                else{
                    console.log("Please enter the employee's email address.");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'office',
            message: "What is this employee's office number? (Required)",
            validate: inputOffice => {
                if(inputOffice){
                    return true;
                }
                else{
                    return false;
                }
            },
            when: (employeeData) => employeeData.role === "Manager"
        },
        {
            type: 'input',
            name: 'github',
            message: "What is the employee's github username? (Required)",
            validate: inputGitHub => {
                if(inputGitHub){
                    return true;
                }
                else{
                    return false;
                }
            },
            when: (employeeData) => employeeData.role === "Engineer"
        },
        {
            type: 'input',
            name: 'school',
            message: "Where does this employee go to school?",
            validate: inputSchool => {
                if(inputSchool){
                    return true;
                }
                else{
                    return false;
                }
            },
            when: (employeeData) => employeeData.role === "Intern"
        },
        {
            type: 'confirm',
            name: 'confirmAddEmployee',
            message: "Add another employee?",
            default: false,
        }
    ])
    .then(employeeData => {
        switch(employeeData.role) {
            case 'Manager':
                const manager = new Manager(employeeData.name, employeeData.id, employeeData.email, employeeData.office);
                teamData.push(manager);
                console.log("You added a Manager!");
                break;
            case 'Engineer':
                const engineer = new Engineer(employeeData.name, employeeData.id, employeeData.email, employeeData.github);
                teamData.push(engineer);
                console.log("You added an Engineer!")
                break;
            case 'Intern':
                const intern = new Intern(employeeData.name, employeeData.id, employeeData.email, employeeData.school);
                teamData.push(intern);
                console.log("You added an Intern!");
                break;

        }

        if(employeeData.confirmAddEmployee){
            return promptEmployees(teamData);
        }
        else{
            return teamData;
        }
    })
};

promptEmployees()
    .then(teamData => {
        return generatePage(teamData);
    })
    .then(pageHTML => {
        return writeFile(pageHTML);
    })
    .then(writeFileResponse => {
        console.log(writeFileResponse);
    })
    .catch(err => {
        console.log(err);
    })