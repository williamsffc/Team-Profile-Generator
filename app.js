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

const teamList = []

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
    },
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
    },
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
    },
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
    return inquirer.prompt(manager_Q)
    // .then(x => {
    // switch(x.choices){
    //     case "Engineer":
    //         return engineer_Q();
    //     case "intern":
    //         return intern_Q();
    //     case "I don\'t want to add any more team members":
    //         return;
    // }
};

function init() {
    userPrompt (manager_Q)
    // let manager = new Manager(name, id, mail, officeNumber);
    // teamList.push(manager);
    // init()
}


// function init() {
//     userPrompt()
//         .then(function (answers) {
//             const html = render(answers);
//             return writeFileAsync("./output/team.html", html);
//         })
//         .then(function () {
//             console.log("Successfully wrote to team.html");
//         })
//         .catch(function (err) {
//             console.log(err);
//         })
// };

init();
// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
