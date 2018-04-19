var mysql      = require('mysql');
var connection = mysql.createConnection({
   host     : 'localhost',
   user     : 'root',
<<<<<<< HEAD
   password : '0123',
   database : 'cs4400'
=======
   password : '',
   database : 'temp1'
>>>>>>> 4a0ab87314b5b0d9c3df2241f13d7d09f02648ed
 });

module.exports =connection;