// ===============================mysql Connection
let mysql = require('mysql');

let mysqlConnect = mysql.createPool({
  //properties:
  connectionLimit: 50,
  host: 'localhost',
  user: 'root',
  password: 'P@ssw0rd',
  database: 'radiowezel',
  charset: "utf8_general_ci"
});





// ===============================Export module
module.exports = {
  mysqlConnect: mysqlConnect
}
