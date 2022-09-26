const connection = require('./config')

class Query {
    constructor(connection){
        this.connection = connection
    }

    findDeparments(){
        return this.connection.promise().query('SELECT * FROM department');
    }
}

module.exports = new Query(connection)