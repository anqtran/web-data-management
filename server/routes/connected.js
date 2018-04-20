var mysql      = require('mysql');
var connection = mysql.createConnection({
   host     : 'localhost',
   user     : 'root',
   database : 'cs4400',
   password : '0123'
 });

module.exports =connection;