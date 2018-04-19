var mysql      = require('mysql');
var connection = mysql.createConnection({
   host     : 'localhost',
   user     : 'root',
<<<<<<< HEAD
<<<<<<< HEAD
   password : '0123',
   database : 'cs4400'
=======
   password : '',
   database : 'temp1'
>>>>>>> 4a0ab87314b5b0d9c3df2241f13d7d09f02648ed
=======
   password : '0123',
   database : 'cs4400'
>>>>>>> f78d949b119bc0dd65968b76cf8173a4d651f792
 });

module.exports =connection;