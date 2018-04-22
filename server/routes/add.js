const express = require('express');
const validator = require('validator');
const router = new express.Router();
var connection = require('./connected');

module.exports = router;

function validatePropertyForm(payload){
  const errors = {};
  let isFormValid = true;
  
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
    errors
  };

}



router.post('/addProperty/', (req, response) => {
var property =  req.body.property;
const validationResult = validatePropertyForm(req.body.property);

//if the input is valid

if(validationResult.success) {
const errors = {};
console.log('property.owner => ',property.owner);
// var currentState = req.body;
    var sql  = "INSERT INTO Property(Name, Size, isCommercial, IsPublic, Street, City, Zip, PropertyType, Owner) VALUES(?,?,?,?,?,?,?,?,?) ";
    var body = [property.propertyName, property.acres, property.commercial,property.public, property.streetAddress, property.city, property.zip,property.propType, property.owner];
    connection.query(sql,body, function(err,res){
       if(err){
       	console.log('err => ',err);
       } else {
          console.log('res => ',res);
          var sql1 = `SELECT ID FROM Property WHERE Name = (?)`;
          var body1 = property.propertyName;
          connection.query(sql1, body1, function(err1, res1){
            if (err1) {
              console.log('err1 => ', err1);
            } else {
              var id = res1[0].ID;
              console.log('id => ',id);
              if (property.animal != '') {
                var addAnimalSql = `INSERT INTO has VALUE(?,?)`;
                var addAnimalBody = [id, property.animal];
                connection.query(sql1, body1, function(err1, res1){
                  if(err1)
                    console.log('err1 => ',err1);
                });
              var addCropSql = `INSERT INTO has VALUE(?,?)`;
              var addCropBody = [id, property.animal];

              }
            }
          })  
       }
    });
  } else {
    console.log('validationResult => ',validationResult);
    return res.status(200).json({
      Error: true,
      success: false,
      message: validationResult.message,
      errors: validationResult.errors
    });

  }
});

