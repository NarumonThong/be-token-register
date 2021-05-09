const mysql = require('mysql');

const connection = mysql.createPool({
  host     : '127.0.0.1',
  user     : 'root',
  password : 'it1234',
  database : 'barter_kub_db',
  charset: 'utf8'
});

module.exports = connection;