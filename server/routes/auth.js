const express = require('express');
const validator = require('validator');
const router = new express.Router();
var connection = require('./connected');
var bcrypt = require('bcrypt');
const saltRounds = 10;
var salt = bcrypt.genSaltSync(saltRounds);
/**
 * Validate the sign up form
 *
 * @param {object} payload - the HTTP body message
 * @returns {object} The result of validation. Object contains a boolean validation result,
 *                   errors tips, and a global message for the whole form.
 */
function validateSignupForm(payload) {
  const errors = {};
  let isFormValid = true;
  let message = '';
  
  console.log('username => ', payload.name);
  
  if (!payload || typeof payload.email !== 'string' || !validator.isEmail(payload.email)) {
    isFormValid = false;
    errors.email = 'Please provide a correct email address.';
  }

  if (!payload || typeof payload.password !== 'string' || payload.password.trim().length < 8) {
    isFormValid = false;
    errors.password = 'Password must have at least 8 characters.';
  }

  else if (!payload || typeof payload.password !== 'string' || payload.password.trim().length < 8) {
    isFormValid = false;
    errors.password = 'Password must have at least 8 characters.';
  }
  if (payload.password !== payload.confirmPassword) {
    isFormValid = false;
    errors.confirmPassword = 'Password does not match.';
  }
  if (!payload || typeof payload.name !== 'string' || payload.name.trim().length === 0) {
    isFormValid = false;
    errors.name = 'Please provide your name.';
  }

  if (!isFormValid) {
    message = 'Check the form for errors.';
  }

  return {
    success: isFormValid,
    message,
    errors
  };
}

/**
 * Validate the login form
 *
 * @param {object} payload - the HTTP body message
 * @returns {object} The result of validation. Object contains a boolean validation result,
 *                   errors tips, and a global message for the whole form.
 */
function validateLoginForm(payload) {
  const errors = {};
  let isFormValid = true;
  let message = '';
  console.log('payload => ',payload);
  console.log('payload.email => ',payload.email);
  if (!payload || typeof payload.email !== 'string' || payload.email.trim().length === 0) {
    isFormValid = false;
    errors.email = 'Please provide your email address.';
  }

  if (!payload || typeof payload.password !== 'string' || payload.password.trim().length === 0) {
    isFormValid = false;
    errors.password = 'Please provide your password.';
  }

  if (!payload || typeof payload.email !== 'string' || !validator.isEmail(payload.email)) {
    isFormValid = false;
    errors.email = 'Please provide a correct email address.';
  }
  if (!payload || typeof payload.password !== 'string' || payload.password.trim().length < 8) {
    isFormValid = false;
    errors.password = 'Password must have at least 8 characters.';
  }

  if (!isFormValid) {
    message = 'Check the form for errors.';
  }

  return {
    success: isFormValid,
    message,
    errors
  };
}


router.post('/visitorsignup', (req, res) => {
  const errors = {};
  var user = req.body.user;
  console.log(user);
  var hash = bcrypt.hashSync(user.password, salt);
  const validationResult = validateSignupForm(req.body.user);
  // if the input is valid
  if (validationResult.success) {
    //run query
    console.log("validation success");
    var sql  = 'INSERT INTO user VALUES (?, ?, ?, ?)';
    //adding hash password
    var body = [user.name, user.email, hash, user.usertype];
    connection.query(sql, body, function(err){
        console.log('sql => ',sql);
        console.log('body => ',body);
       if(err){
        console.log('err IMPORTANTTT=> ',err);
        errors.email = 'Email is already taken.';
        console.log("user duplicated");
        return res.status(200).json({Error: true, success: false, errors: errors});
       } else {
          return res.json({"Error": false, "Message": "Success"})
       }
    });
  }
  else {
    console.log('validationResult => ',validationResult);
    return res.status(200).json({
      Error: true,
      success: false,
      message: validationResult.message,
      errors: validationResult.errors
    });
  }
});





router.post('/login', (req, res) => {
  const errors = {};
  let message = '';
  console.log('req.body => ',req.body);
  const validationResult = validateLoginForm(req.body.user);
  console.log('validationResult => ',validationResult);
  if (validationResult.success) {
    const email = req.body.user.email;
    const password = req.body.user.password;
    console.log('email => ',email);
    console.log('password => ',password);
    //run sql query
    var sql = 'SELECT * FROM user WHERE Email = ?';
    var body = email;
    connection.query(sql,body, function(err, rows) {
      if(err){
        console.log('err => ',err);
        return res.status(200).json({Error: true, success: false, errors: errors});
      } else{
        console.log('rows => ',rows);
        // if there is no email in the system
        if (!rows[0]) {
          errors.email = 'Please check your email.';
          return res.status(200).json({Error: true, success: false, errors: errors});
        }

        const user = rows[0];
        const HashedPassword = user['Password'];
        //compared hash password 
        if(bcrypt.compareSync(password, HashedPassword)) {
          // successful
          const type = user['UserType'];
          console.log('type => ',type);
          console.log(user);
          user['Password'] = ''; 
          return res.status(200).json({
            success:true,
            user: user
        })
          
        } else {
          // password not match
          errors.password = 'You entered a wrong password.';
          console.log("password not match");
          return res.status(200).json({Error: true, success: false, errors: errors});
        }

      }
    });

  } else {
    return res.status(200).json({
      Error: true,
      success: false,
      message: validationResult.message,
      errors: validationResult.errors
    });
  }


});


module.exports = router;
