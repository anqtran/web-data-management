var mysql      = require('mysql');
var connection = mysql.createConnection({
   host     : 'localhost',
   user     : 'root',
   database : 'temp1'
 });

module.exports =connection;