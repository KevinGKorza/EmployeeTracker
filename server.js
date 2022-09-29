const inquirer = require('inquirer');
require('console.table');
const db = require('./db/lib')

function start () {

    inquirer.prompt([
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
    ]).then((answer)=>{


        if (answer.choices === "View all departments") {
            viewAllDepartments();
        }
        else if (answer.choices === "View all roles") {
            viewAllRoles();
        }
        else if (answer.choices === "View all employees"){
            viewAllEmployees();
        }
        else if(answer.choices === "Add department") {
            addADepartment();
        }
        else if (answer.choices === "Add roles"){
            addRoles();
        }
        else if(answer.choices === "Add employee") {
            addEmployee();
        }
        else if(answer.choices === "Update all departments") {
            updateAllDepartments();
        }
        else if(answer.choices === "Update employee information") {
            updateEmployeeInformation();
        }
        else if(answer.choices === "Exit") {
            process.exit();
            
        };
    })


}

    //All Department function
  function viewAllDepartments () {
        db.findDeparments().then(([data])=>{
            console.table(data)
        }).then(()=> start())
        inquirer.prompt([
            {
                type: 'list',
                name: 'choices',
                message: 'Please pick a Department',
                choices: [
                    'Human Resources',
                    'Managment',
                    'Sales'
                   
                ]
            }
        ])
        console.log();

    };
    

    
    
    //All Roles function
    function viewAllRoles () {
        db.findRoles().then(([data])=>{
            console.table(data)
        }).then(()=> start())
        inquirer.prompt([
            {
                type: 'list',
                name: 'choices',
                message: 'Please pick a Role',
                choices: [
                    'Human Resources Director',
                    'Human Resources Assistant',
                    'Managment Assistant',
                    'Sales Manager',
                    'Sales Assistant'
                   
                ]
            }
        ])
        console.log();

        
    };
   

    //All Employees
    function viewAllEmployees () {
        db.findEmployees().then(([data])=>{
            console.table(data)
        }).then(()=> start())
        inquirer.prompt([
            {
                type: 'list',
                name: 'choices',
                message: 'Please pick an Employee',
                choices: [
                    'Homer Simpson',
                    'Marge Simpson',
                    'Ned Flanders',
                    'Bart Simpson',
                    'Lisa Simpson',
                    'Maude Flanders'
                   
                ]
            }
        ])
        console.log();
    };




    //Add Department
    function addADepartment () {
        db.findADepartment().then(([data])=>{
            console.table(data)
        }).then(()=> start())
        inquirer.prompt([
            {
                type: 'list',
                name: 'choices',
                message: 'Please add a Department',
                choices: [
                    'Human Resources',
                    'Managment',
                    'Sales'
                   
                ]
            }
        ])
        console.log();
    }





    //Add Roles
    function addRoles () {
        db.findARole().then(([data])=>{
            console.table(data)
        }).then(()=> start())
        inquirer.prompt([
            {
                type: 'list',
                name: 'choices',
                message: 'Please add a role',
                choices: [
                    'Human Resources',
                    'Managment',
                    'Sales'
                   
                ]
            }
        ])
        console.log();
    };




    //Add Employee
    function addEmployee () {
        db.findAEmployee().then(([data])=>{
            console.table(data)
        }).then(()=> start())
        inquirer.prompt([
            {
                type: 'list',
                name: 'choices',
                message: 'Please add an Employee',
                choices: [
                    'Homer Simpson',
                    'Marge Simpson',
                    'Ned Flanders',
                    'Bart Simpson',
                    'Lisa Simpson',
                    'Maude Flanders'
                   
                ]
            }
        ])
        console.log();

    };




    //Update All Departments
    function updateAllDepartments () {
        db.updateADepartment().then(([data])=>{
            console.table(data)
        }).then(()=> start())
        inquirer.prompt([
            {
                type: 'list',
                name: 'choices',
                message: 'Update Departments',
                choices: [
                    'Human Resources',
                    'Managment',
                    'Sales'
                   
                ]
            }
        ])
        console.log();


        
    };






    //Update Employee Information
    function updateEmployeeInformation () {
        db.updateEmployeeInformation().then(([data])=>{
            console.table(data)
        }).then(()=> start())
        inquirer.prompt([
            {
                type: 'list',
                name: 'choices',
                message: 'Update Employee',
                choices: [
                    'Homer Simpson',
                    'Marge Simpson',
                    'Ned Flanders',
                    'Bart Simpson',
                    'Lisa Simpson',
                    'Maude Flanders'
                   
                ]
            }
        ])
        console.log();

    }



  start()  



















  //////////////



//     //All Roles function
//   const viewAllRoles = () => {
//         console.log("All your roles.");
//         db.query('SELECT roles.id, roles.title, department.name AS department FROM roles LEFT JOIN department ON roles.department_id = department.id', function (results) {
//             console.log(results);
//         });
//     }

//      //All Employees function
//   const  viewAllEmployees = () => 
//      console.log("All of your employees.");
//      db.query('SELECT * FROM department', function (err, results) {
//          console.log(results);
//      });
    
//     //add roles 
//    const addRoles = () => 
//     inquirer.prompt([
//         {
//             type: 'input',
//             name: 'roles',
//             message: "Please pick a role?",
//         },
//         {
//             type: 'input',
//             name: 'salary',
//             message: "What is your salary?",
//         }
//     ]);

//     //add employee
//    const addEmployee = () =>
//     inquirer.createPromptModule([
//         {
//             type: 'input',
//             name: 'first_name',
//             message: "What is your employees first name?"
//         },
//     ])





//     //update all departments





//     //update employee information






//     //exit 
//     app.use((req, res) => {
//         res.status(404).end();
//     });


   



 //start()
   
    








// //////////////////////
// //db.query('SELECT * FROM department', function (err, results) {
//     //console.log(results);
// //});

// //db.query('SELECT * FROM role', function (err, results) {
//     //console.log(results);
// //});

// //db.query('SELECT * FROM employee', function (err, results) {
//     //console.log(results);
// //});

// //Default response for any other request (NOT FOUND)
// //app.use((req, res) => {
//     //res.status(404).end();
// //});

// //app.listen(PORT, () => {
//     //console.log(`Server running on port ${PORT}`)
// //});

