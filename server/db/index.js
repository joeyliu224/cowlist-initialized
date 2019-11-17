var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'student',
    password: 'student',
    database: 'cows'
});

module.exports = connection;