const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
var mysql = require('mysql');

// tell the app to look for static files in these directories
app.use(express.static('./server/static/'));
app.use(express.static('./client/dist/'));
// tell the app to parse HTTP body messages
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

// routes
const authRoutes = require('./server/routes/auth');
app.use('/auth', authRoutes);
const populateRoutes = require('./server/routes/populate');
console.log('populateRoutes => ',populateRoutes);
app.use('/populate', populateRoutes);

// start the server
app.listen(3000, () => {
	console.log('Server is running on http://localhost:3000 or http://127.0.0.1:3000');
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'server/static/index.html'));
 });

})