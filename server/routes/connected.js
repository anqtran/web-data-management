var mysql      = require('mysql');
var connection = mysql.createConnection({
   host     : 'localhost',
   user     : 'root',
   password : '0123',
   database : 'cs4400'
 });

module.exports =connection;