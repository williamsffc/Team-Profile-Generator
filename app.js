const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const render = require("./lib/htmlRenderer");

const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const util = require("util");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const writeFileAsync = util.promisify(fs.writeFile);

const employees = []

const manager_Q = [
    {
        type: "input",
        name: "name",
        message: "What is your manager's name?",
    },
    {
        type: "input",
        name: "id",
        message: "What is your manager's ID?",
    },
    {
        type: "input",
        name: "email",
        message: "What is your manager's email?",
    },
    {
        type: "input",
        name: "officeNumber",
        message: "What is your manager's office number?",
    }
];

const engineer_Q = [
    {
        type: "input",
        name: "name",
        message: "What is your engineer's name?",
    },
    {
        type: "input",
        name: "id",
        message: "What is your engineer's ID?",
    },
    {
        type: "input",
        name: "email",
        message: "What is your engineer's email?",
    },
    {
        type: "input",
        name: "github",
        message: "What is your engineer's GitHub username?",
    }
];

const intern_Q = [
    {
        type: "input",
        name: "name",
        message: "What is your intern's name?",
    },
    {
        type: "input",
        name: "id",
        message: "What is your intern's ID?",
    },
    {
        type: "input",
        name: "email",
        message: "What is your intern's email?",
    },
    {
        type: "input",
        name: "school",
        message: "What is your intern's school?",
    }
];

const employeeRole_Q = [
    {
        type: "list",
        name: "role",
        message: "What type of team member would you like to add?",
        default: '(Use arrow keys)',
        choices: [
            'Engineer',
            'Intern',
            'I don\'t want to add any more team members',
        ]
    }
];

function userPrompt() {
    console.log("Building a new team...");
    inquirer.prompt(manager_Q)
        .then((answers) => {
            var manager = new Manager(
                answers.name,
                answers.id,
                answers.email,
                answers.officeNumber
            );
            employees.push(manager);
            employeeList();
        })
};

function employeeList() {
    inquirer.prompt(employeeRole_Q)
        .then((answers) => {
            switch (answers.role) {
                case "Engineer":
                    return new_Engineer();
                case "Intern":
                    
                    return new_Intern();
                default:
                    console.log("All team members have been saved!!!");
                    writeFileAsync("./output/team.html", render(employees));
            }
        })
}

function new_Engineer() {
    console.log("Adding a new engineer...");
    inquirer.prompt(engineer_Q)
        .then((answers) => {
            var engineer = new Engineer(
                answers.name,
                answers.id,
                answers.email,
                answers.github
            );
            employees.push(engineer);
            employeeList();
        })
}

function new_Intern() {
    console.log("Adding a new intern...");
    inquirer.prompt(intern_Q)
        .then((answers) => {
            var intern = new Intern(
                answers.name,
                answers.id,
                answers.email,
                answers.school
            );
            employees.push(intern);
            employeeList();
        })
}

function init() {
    userPrompt([
        manager_Q,
        engineer_Q,
        intern_Q
    ]);

}

init();
