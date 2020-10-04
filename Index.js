const inquirer = require('inquirer');
// const fs = require('fs');
// const generatePage = require('./src/page-template.js');
const Manager = require('./lib/Manager');
// const Engineer = require('./lib/Engineer');
// const Intern = require('./lib/Intern');

//psuedocode
    //application opens and greets the user
    //Application asks is the user would like to create a team
        //if yes, start up team
        //if no, say goodbye
    //Yes: Application asks who to add to the team
        //if Manager, ask:
            // Name
            // ID
            // Email
            // Office Number
        //If Engineer, ask:
            // Name
            // ID
            // Email
            // Github
        //If Intern, ask:
            //Name
            // ID
            // Email
            // School
        //If other, ask:
            //Name
            //ID
            //Email
    //One a person is added, application will ask again if you will add another employee
        //If yes, restart process
        //If no, end program

// Prompts Needed
    // Would you like to create a team?
        // Yes
        // No
    // What role does this person serve?
        // Manager
        // Engineer
        // Intern
        // Undefined
    // Would you like to add another person?
        //If Yes, restart
        // If No, end

// Methods needed
    // initializeApp()
    // addEmployee()
    // endApp()

// class App{
//     constructor() {
//         this.employees = [];
//         this.manager;
//         this.engineer;
//         this.intern;
//     };

//     initializeApp() {
//         inquirer
//             .prompt({
//                 type: 'list',
//                 name: 'teamStart',
//                 message: 'Would you like to create a team page?',
//                 choices: ["Yes", "No"]
//             })
//             .then(({ teamStart }) => {
//                 if(teamStart === "Yes") {
//                     this.determineRole();
//                 }
//                 else{
//                     this.endApp();
//                 }
//             })
//     }

//     determineRole() {
//         inquirer
//             .prompt({
//                 type: 'list',
//                 name: 'employeeRole',
//                 message: "What is the employee's role?",
//                 choices: ["Manager", "Engineer", "Intern"]
//             })
//             .then(({ employeeRole }) => {
//                 if(employeeRole === "Manager"){
//                     inquirer
//                         .prompt([
//                             {
//                                 type: 'text',
//                                 name: 'name',
//                                 message: "What is the employee's name?",
//                                 validate: nameInput => {
//                                     if (nameInput) {
//                                         return true;
//                                     }
//                                     else{
//                                         console.log("Please enter a name.");
//                                         return false;
//                                     }
//                                 }
//                             },
//                             {
//                                 type: 'text',
//                                 name: 'id',
//                                 message: "What is the employee's ID?",
//                                 validate: idInput => {
//                                     if (idInput) {
//                                         return true;
//                                     }
//                                     else{
//                                         console.log("Please enter an ID.");
//                                         return false;
//                                     }
//                                 }
//                             },
//                             {
//                                 type: 'text',
//                                 name: 'email',
//                                 message: "What is the employee's email address?",
//                                 validate: emailInput => {
//                                     if (emailInput) {
//                                         return true;
//                                     }
//                                     else {
//                                         console.log("Please enter an email address");
//                                         return false;
//                                     }
//                                 }
//                             }
//                     ])
//                 }
//             })

//     }

    
// };

// new App().initializeApp();

const promptEmployees = teamData => {
    // if (!teamData.employees){
    //     teamData.employees = [];
    // };

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
        console.log("this works");
        // for (var i = 0; i < employeeData.length; i++){
        //     if(employeeData[i].role === "Engineer"){
        //         const engineer = new Engineer(employeeData.name, employeeData.id, employeeData.email, employeeData.github);
        //         //teamData.employees.push(engineer);
        //         console.log(engineer);
        //         console.log("Went throught his process");
        //     }
        //     else{
        //         const intern = new Intern(employeeData.name, employeeData.id, employeeData.email, employeeData.school);
        //         //teamData.employees.push(intern);
        //         console.log(intern);
        //     }
        // };
        
        // if(employeeData.confirmAddEmployee){
        //     return promptEmployees(teamData);
        // }
        // else{
        //     return teamData;
        // }
    })
};

promptEmployees();