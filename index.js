const inquirer = require('inquirer');

const mysql = require('mysql2');

const format = require('console.table');


// DATABASE CONNECTION HERE!!!
const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'employee_tracker'
});

const mQuestions = [
    {
        type: "list",
        name: "masterList",
        message: "What do you want to do with this Employee Tracker DataBase?",
        choices: ["View All Departments", "View All Roles", "View All Employees", "Add a Department", "Add a Role", "Add an Employee", "Update Employee Roles", "Exit Program"]
    }
];

const mActions = () => {
    inquirer.prompt([{
        type: 'confirm',
        message: 'Is there anything else you would like to do in the Employee DataBase?',
        name: 'mActions',
        default: false
    }]).then(({mActions}) => {
        if(mActions) {
            return promptUser();
        } connection.end();
    })
    .catch(err => console.log(err));
}

function mSwitch(answers) {
    switch (answers) {
        case "View All Departments":
            viewDepartments();
            break;
          
        case "View All Roles":
            viewRoles();
            break;
            
        case "View All Employees":
            viewEmployees();
            break;
            
        case "Add a Department":
            addDepartment();
            break;

        case "Add a Role":
            addRole();
            break;

        case "Add an Employee":
            addEmployee();
            break;

        case "Update Employee Roles":
            updateERoles();
            break;

        default:
            console.log("No Option has been selected.");
            break;
    }
};

function promptUser() {
    inquirer
        .prompt(mQuestions)
        .then(answers => {
            mSwitch(answers.masterList);
        })
        .catch(error => console.log(error));
};

function viewDepartments() {
    connection.query(
        `SELECT * FROM departments`,
        function (err, results) {
            if (err) throw err;
            console.table(results);
            mActions();
        }
    );
};

function viewRoles() {
    connection.query(
        `SELECT * FROM roles`,
        function (err, results) {
            if (err) throw err;
            console.table(results);
            mActions();
        }
    );
};

function viewEmployees() {
    connection.query(
        `SELECT * FROM employees`,
        function (err, results) {
            if (err) throw err;
            console.table(results);
            mActions();
        }
    );
};

function addDepartment() {
    inquirer.prompt([
        {
            type: "input",
            name: "newDeptName",
            message: "Please enter then name for the new Department:"
        }
    ])
    .then(answers => {
        connection.query(
            `INSERT INTO departments SET ?`,
            {
                department_name: answers.newDeptName
            },
            function (err, results) {
                if (err) throw err;
                console.log("New department Added!");
                mActions();
            }
        );        
    });
};

function addRole() {
    connection.query(
        `SELECT * FROM departments`,
        function (err, results) {
            if (err) throw err;

            let departmentList = results.map(department => ({
                name: department.department_name, value: department.id
            }));

            inquirer.prompt([
                {
                    type: "input",
                    name: "newRoleName",
                    message: "Please enter the name of the new Ro;e"
                },
                {
                    type: "input",
                    name: "newRoleSalary",
                    message: "Please enter the new salary for the new Role:",
                },
                {
                    type: "list",
                    name: "newRoleDept",
                    message: "please select the new Role's Department.",
                    choices: departmentList
                }
            ])
                .then(answers => {
                    connection.query(
                        `INSERT INTO roles SET ?`,
                        {
                            title: answers.newRoleName,
                            salary: answers.newRoleSalary,
                            department_id: answers.newRoleDept
                        },
                        function (err, results) {
                            if (err) throw err;
                            console.log("New Role Added");
                            mActions();
                        }
                    );
                })
        }
    );
};

function addEmployee() {
    connection.query(
        `SELECT * FROM employees WHERE roles_id = 1`,
        function (err, results) {
            if(err) throw err;
            let managerList = results.map(manager => ({
                name: manager.first_name, value: manager.id
            }));
            console.log(managerList);

            connection.query(
                `SELECT * FROM roles`,
                function (err, results) {
                    if (err) throw err;

                    let roleList = results.map(role => ({
                        name: role.title, value: role.id
                    }));

                    inquirer.prompt([
                        {
                            type: "input",
                            name: "empFistName",
                            message: "Please enter Empolyee's first name here:"
                        },
                        {
                            type: "input",
                            name: "empLastName",
                            message: "Please enter the Employee's last name here:"
                        },
                        {
                            type: "list",
                            name: "empRole",
                            message: "Please select the employee's new role.",
                            choices: roleList
                        },
                        {
                            type: "list",
                            name: "empManager",
                            message: "Please select the new Employee's Manager.",
                            choices: managerList
                        }
                    ])
                        .then(answers => {
                            connection.query(
                                `INSERT INTO employees SET ?`,
                                {
                                    first_name: answers.empFistName,
                                    last_name: answers.empLastName,
                                    roles_id: answers.empRole,
                                    manager_id: answers.empManager
                                },
                                function (err, results) {
                                    if (err) throw err;
                                    console.log("New Employee Added Successfully!");
                                    mActions();
                                }
                            );
                        })
                }
            );
        }
    );
};

const updateERoles = () => {
    connection.query(
        'SELECT CONCAT(employees.first_name, " ",employees.last_name) AS full_name, employees.id as empl_id, roles.* FROM employees RIGHT JOIN roles on employees.roles_id = roles.id',
        function (err, res) {
            if (err) throw err;
            let employeeList = res.map(employee => ({
                full_name: employee.full_name,
                id: employee.empl_id,
                value: [employee.full_name, employee.empl_id]
            }))

            let roleList = res.map(roles => ({
                title: roles.title,
                id: roles.id,
                value: [roles.title, roles.id]
            }));

            inquirer.prompt([{
                type: 'list',
                name: 'employee',
                choices: employeeList,
                message: 'Which employee would you like to edit?'
            },
            {
                type: 'list',
                name: 'newRole',
                choices: roleList,
                message: 'What tole do you want to assign to this employee?'
            }
            ])
                .then((answer) => {
                    let editID = answer.employee[1];
                    let newRoleID = answer.newRole[1];
                    connection.query(`UPDATE employees SET roles_id=${newRoleID} WHERE id=${editID};`,
                        function (err, res) {
                            if (err) {
                                throw err
                            }
                            console.table(res);
                            mActions();
                        })
                }
                
                )
        }
    )
};

connection.connect(err => {
    if (err) throw err;
    console.log('Connected as id' + connection.threadId + '\n');
    promptUser();
});

promptUser();