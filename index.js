const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
  var mysql      = require('mysql');
  var connection = mysql.createConnection({
   host     : 'localhost',
   user     : 'root',
   password : '0123',
   database : 'cs4400'
 });
// tell the app to look for static files in these directories
app.use(express.static('./server/static/'));
app.use(express.static('./client/dist/'));
// tell the app to parse HTTP body messages
app.use(bodyParser.urlencoded({ extended: false }));

// routes
const authRoutes = require('./server/routes/auth');
app.use('/auth', authRoutes);

// start the server
app.listen(3000, () => {
	console.log('Server is running on http://localhost:3000 or http://127.0.0.1:3000');
	  connection.query('SELECT * FROM property;', function(err, rows, fields) {
   if (!err)
     console.log('The solution is: ', rows);
   else
     console.log('Error while performing Query.');
});

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'server/static/index.html'));
 });

 connection.end();
})