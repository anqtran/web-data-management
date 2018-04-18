var mysql      = require('mysql');
var connection = mysql.createConnection({
   host     : 'localhost',
   user     : 'root',
   password : '',
   database : 'temp1'
 });

module.exports =connection;