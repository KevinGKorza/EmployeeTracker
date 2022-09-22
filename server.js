const express = require('express');
//The import of mysql2
const mysql = require('mysql2');
const PORT = process.env.PORT || 3001;
const app = express();

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

