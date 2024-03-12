var mysql = require("mysql");
var pool = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Yash@123",
  database: "assignmentwti",
  multipleStatements: true,
  connectionLimit:100
});
module.exports = pool;