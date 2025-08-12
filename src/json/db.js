const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',        // the user to my MySQL
    password: 'Qwe.123*',        // my password MySQL
    database: 'pd_iris_martelo_clanMacondo'
});

connection.connect(err => {
    if (err) throw err;
    console.log('connected to the database');
});

module.exports = connection;