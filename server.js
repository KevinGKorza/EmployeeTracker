const express = require('express');
//The import of mysql2
const mysql = require('mysql2');
const PORT = process.env.PORT || 3001;
const app = express();
const inquirer = require('inquirer');
const consoleTable = require('console.table');
const Connection = require('mysql2/typings/mysql/lib/Connection');

//Express Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//Database connection
const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'employeetrackerlist_db'
    },
    console.log('Connected to the databse.')
);

//mysql database 
Connection.connect(function (err) {
    if (err) return console.log(err);
    InquirerPrompt();
})

const InquirerPrompt = () => 
    inquirer.createPromptModule([
        {
            type: 'list',
            name: 'choices',
            message: 'Please pick an option',
            choices: [
                'View all departments',
                'View all roles',
                'View all employees',
                'Add department',
                'Add roles',
                'Add employee',
                'Update all departments',
                'Update employee information',
                'Exit'
            ]
        }
    ])

    if (InquirerPrompt.choices === "View all departments") {
        viewAllDepartments();
    }
    else if (InquirerPrompt.choices === "View all roles") {
        viewAllRoles();
    }
    else if (InquirerPrompt.choices === "View all employees"){
        viewAllEmployees();
    }
    else if(InquirerPrompt.choices === "Add department") {
        addADepartment();
    }
    else if (InquirerPrompt.choices === "Add roles"){
        addRoles();
    }
    else if(InquirerPrompt.choices === "Add employee") {
        addEmployee();
    }
    else if(InquirerPrompt.choices === "Update all departments") {
        updateAllDepartments();
    }
    else if(InquirerPrompt.choices === "Update employee information") {
        updateEmployeeInformation();
    }
    else if(InquirerPrompt.choices === "Exit") {
        Connection.end();
        console.log("Good bye!");
    };


    //All Department function
    viewAllDepartments = () => {
        console.log("All your departments.");
        db.query('SELECT department.id AS id, department.name AS department FROM department', function (results) {
            console.log(results);
        });
    }

    //All Roles function
    viewAllRoles = () => {
        console.log("All your roles.");
        db.query('SELECT roles.id, roles.title, department.name AS department FROM roles LEFT JOIN department ON roles.department_id = department.id', function (results) {
            console.log(results);
        });
    }

     //All Employees function
     viewAllEmployees = () => 
     console.log("All of your employees.");
     db.query('SELECT * FROM department', function (err, results) {
         console.log(results);
     });
    
    //add roles 
    addRoles = () => 
    inquirer.createPromptModule([
        {
            type: 'input',
            name: 'roles',
            message: "Please pick a role?",
        },
        {
            type: 'input',
            name: 'salary',
            message: "What is your salary?",
        }
    ]);

    //add employee





    //update all departments





    //update employee information






    //exit 


   




   
    








//////////////////////
//db.query('SELECT * FROM department', function (err, results) {
    //console.log(results);
//});

//db.query('SELECT * FROM role', function (err, results) {
    //console.log(results);
//});

//db.query('SELECT * FROM employee', function (err, results) {
    //console.log(results);
//});

//Default response for any other request (NOT FOUND)
//app.use((req, res) => {
    //res.status(404).end();
//});

//app.listen(PORT, () => {
    //console.log(`Server running on port ${PORT}`)
//});

