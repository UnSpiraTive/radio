// ===============================mysql Connection
let mysql = require('mysql');

let mysqlConnect = mysql.createPool({
  //properties:
  connectionLimit: 50,
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'radiowezel',
  charset: "utf8_polish_ci"
});





// ===============================Export module
module.exports = {
  mysqlConnect: mysqlConnect
}
