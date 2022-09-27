const connection = require('./config')

class Query {
    constructor(connection){
        this.connection = connection
    }

    findDeparments(){
        return this.connection.promise().query('SELECT * FROM department');
    }
    findRoles(){
        return this.connection.promise().query('SELECT * FROM role');
    }
    findEmployees(){
        return this.connection.promise().query('SELECT * FROM employee');
    }
    findADepartment(){
        return this.connection.promise().query('SELECT * FROM department');
    }
    findARole(){
        return this.connection.promise().query('SELECT * FROM role');
    }
    findAEmployee(){
        return this.connection.promise().query('SELECT * FROM employee');
    }
    updateADepartment(){
        return this.connection.promise().query('SELECT * FROM department');
    }
    updateEmployeeInformation(){
        return this.connection.promise().query('SELECT * FROM employee');
    }



}




module.exports = new Query(connection);

