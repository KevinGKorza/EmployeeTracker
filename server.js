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
            // updateAllDepartments();
        }
        else if(answer.choices === "Update employee information") {
            // updateEmployeeInformation();
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
    }














    

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


   



// start()
   
    








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

