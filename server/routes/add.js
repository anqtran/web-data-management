const express = require('express');
const validator = require('validator');
const router = new express.Router();
var connection = require('./connected');

module.exports = router;

function validatePropertyForm(payload){
  const errors = {};
  let isFormValid = true;
  
  console.log('username => ', payload.name);
  
  if (!payload.propertyName || typeof payload.propertyName !== 'string') {
    isFormValid = false;
    errors.propertyName = 'Please provide a correct property name.';
  }

  if (!payload.streetAddress || typeof payload.streetAddress !== 'string') {
    isFormValid = false;
    errors.streetAddress = 'Please provide a correct street address.';
  }


  if (!payload.city || typeof payload.city !== 'string') {
    isFormValid = false;
    errors.city = 'Please provide a correct city name.';
  }


  if (!payload.zip || !isNumeric(payload.zip)) {
    console.log('typeof(payload.zip) => ',typeof(payload.zip));
    isFormValid = false;
    errors.zip = 'Please provide a correct zip code.';
  } else {
      var num = parseInt(payload.zip);
      if (num < 10000 || num  > 99950) {
        isFormValid = false;
        errors.zip = 'Please provide a correct zip code.';
    }
  }

  if (!payload.acres || !isNumeric(payload.acres)) {
    isFormValid = false;
    console.log('hereeee => ');
    errors.acres = 'Please provide a correct acres.';
  } else {
      var num = parseInt(payload.acres);
      console.log('num => ',num);
      if (num < 0) {
        isFormValid = false;
        errors.acres = 'Please provide a correct acres.';
    }
  }


  if (!payload.animal || typeof payload.animal !== 'string') {
    isFormValid = false;
    errors.animal = 'You have not choose animal fields.';
  }

  if (!payload.crop || typeof payload.crop !== 'string') {
    isFormValid = false;
    errors.crop = 'You have not choose crop fields.';
  }

  return {
    success: isFormValid,
    errors
  };

}

function isNumeric(value) {
    return /^-{0,1}\d+$/.test(value);
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
       	errors.propertyName = "The Property Name has been taken."
        return res.status(200).json({Error: true, success: false, errors: errors});
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
                connection.query(addAnimalSql, addAnimalBody, function(err2, res2){
                  if(err2)
                    console.log('err1 => ',err2);
                });
              var addCropSql = `INSERT INTO has VALUE(?,?)`;
              var addCropBody = [id, property.crop];
                  connection.query(addCropSql, addCropBody, function(err3, res3){
                    if(err3)
                    console.log('err1 => ',err3);
                });
              }
            }
          })  
       }
    });
  } else {
    console.log('validationResult => ',validationResult);
    return response.status(200).json({
      Error: true,
      success: false,
      errors: validationResult.errors
    });

  }
});

