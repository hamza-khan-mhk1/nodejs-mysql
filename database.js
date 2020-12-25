var mysql = require("mysql");

var connection = mysql.createConnection({
    host: 'localhost',
    database: 'employee_database',
    user: 'root',
    password: 'root'
});

module.exports = connection;