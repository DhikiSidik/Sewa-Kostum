const mysql = require('mysql');
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
});

connection.connect(function (error) {
    if (!!error) {
        console.log(error);
    } else {
        console.log('Connection Succuessfully!');
    }
})

module.exports = connection; 
