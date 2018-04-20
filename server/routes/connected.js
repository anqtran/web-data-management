var mysql      = require('mysql');
var connection = mysql.createConnection({
   host     : 'localhost',
   user     : 'root',
   database : 'temp1',
   password : ''
 });

module.exports =connection;