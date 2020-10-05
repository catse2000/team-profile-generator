const inquirer = require('inquirer'); // imported to provide additional tools to prompt the user for information
const generatePage = require('./src/page-template.js'); //allows application to push information as html file is created
const { writeFile } = require('./utils/generate-site.js'); //imported to generate a file when code is executed
const Manager = require('./lib/Manager'); //imported to allow access to Manager object creation
const Engineer = require('./lib/Engineer'); //imported to allow access to Engineer object creation
const Intern = require('./lib/Intern'); //imported to allow access to Intern object creation

// prompt the employee for information
const promptEmployees = teamData => {
    if (!teamData){ //if array "teamData" does not exist, create and initialize
        teamData = [];
    };

    return inquirer.prompt([
        {//determine what role the new employee will be
            type: 'list',
            name: 'role',
            message: "What is this employee's role?",
            choices: ["Manager", "Engineer", "Intern"],
        },
        {//collect employee's name
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
        {//collect employee's id
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
        {//collect employee's email address
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
        { //collect employee's office number
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
        { //collect github username if employee role is "engineer"
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
        { //collect school name if employee role is "intern"
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
        { //as if the user wants to add an additional employee
            type: 'confirm',
            name: 'confirmAddEmployee',
            message: "Add another employee?",
            default: false,
        }
    ]) //after every iteration of prompts, add the new employee to the array teamData based on the switch statement below
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
        // if "yes" is selected when prompted to add an employee, start the prompt process over
        if(employeeData.confirmAddEmployee){
            return promptEmployees(teamData);
        }
        else{
            return teamData;
        }
    })
};

promptEmployees() //run user prompts
    .then(teamData => { //then send teamData arry to generatePage to generate html code
        return generatePage(teamData);
    })
    .then(pageHTML => { //then send html code to writeFile to generate index.html file
        return writeFile(pageHTML);
    })
    .then(writeFileResponse => { //confirm if the index.html file was written and saved without errors
        console.log(writeFileResponse);
    })
    .catch(err => { //if an error is encountered, print in the console
        console.log(err);
    })