// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name, id, email, school, role) {
        super(name, id, email, school, role);
        this.name = name;
        this.id = id;
        this.email = email;
        this.school = school,
        this.role = 'Intern';
    }
}

const intern = new Intern;

    //     this.name = name;
    //     this.id = id;
    //     this.email = email;
    //     this.school = school,
    //     this.role = 'Intern';
    // }
    // getName() {
    //     return this.name;
    // }
    // getId() {
    //     return this.id;
    // }
    // getEmail() {
    //     return this.email;
    // }
    // getSchool() {
    //     return this.school;
    // }
    // getRole() {
    //     return this.role;