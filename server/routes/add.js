const express = require('express');
const validator = require('validator');
const router = new express.Router();
var connection = require('./connected');
var bcrypt = require('bcrypt');
const saltRounds = 10;
var salt = bcrypt.genSaltSync(saltRounds);
module.exports = router;

function validatePropertyForm(payload){
  const errors = {};
  let isFormValid = true;
  
  
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
    errors.acres = 'Please provide a correct acres.';
  } else {
    var num = parseInt(payload.acres);
    if (num < 0) {
      isFormValid = false;
      errors.acres = 'Please provide a correct acres.';
    }
  }


  if (!payload.animal || typeof payload.animal !== 'string') {
    if (payload.propType == "FARM") {
      isFormValid = false;
      errors.animal = 'Farm must have animals.';  
    }
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

function validateSignupForm(payload) {
  const errors = {};
  let isFormValid = true;
  let message = '';
  
  
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

router.post('/addOwner', (req, res) => {
  var user = req.body.user;
  var property = req.body.property;
  var hash = bcrypt.hashSync(user.password, salt);
  const validationUser = validateSignupForm(req.body.user);
  const validationProp = validatePropertyForm(req.body.property);
  var errors = Object.assign(validationUser.errors, validationProp.errors)
  // if the input is valid
  var self_res = res;
  if (Object.keys(errors).length == 0) {

    // Check if duplicated
    var checkPropertySql = "SELECT * FROM property WHERE Name = (?) "
    var checkPropertyBody = property.propertyName;
    connection.query(checkPropertySql, checkPropertyBody, function(checkPropErr,res){
      if (res.length != 0) {
        errors.propertyName = 'Property Name has already been taken.';
        return  self_res.status(200).json({Error: true, success: false, errors: errors});
      } else {
        var sql  = 'INSERT INTO user VALUES (?, ?, ?, ?)';
        //adding hash password
        var body = [user.name, user.email, hash, user.usertype];
        connection.query(sql, body, function(err){
          if(err){
            var sqlMessage = err.sqlMessage;
            if (sqlMessage.includes(user.email)) {
              errors.email = 'Email is already taken.';  
            } else {
              errors.name = 'Username is already taken.';
            }
            return self_res.status(200).json({Error: true, success: false, errors: errors});
          } else {
            var propsql  = "INSERT INTO Property(Name, Size, isCommercial, IsPublic, Street, City, Zip, PropertyType, Owner) VALUES(?,?,?,?,?,?,?,?,?) ";
            var bodysql = [property.propertyName, property.acres, property.commercial,property.public, property.streetAddress, property.city, property.zip,property.propType, user.name];
            connection.query(propsql,bodysql, function(err,res){
              if(err){
                errors.propertyName = "The Property Name has been taken."
                return self_res.status(200).json({Error: true, success: false, errors: errors});
              } else {
                var sql1 = `SELECT ID FROM Property WHERE Name = (?)`;
                var body1 = property.propertyName;
                connection.query(sql1, body1, function(err1, res1){
                  if (err1) {
                  } else {
                    var id = res1[0].ID;
                    if (property.animal != '') {
                      var addAnimalSql = `INSERT INTO has VALUE(?,?)`;
                      var addAnimalBody = [id, property.animal];
                      connection.query(addAnimalSql, addAnimalBody, function(err2, res2){
                        if(err2)
                          console.log('err2 => ',err2);
                      });
                    }
                      var addCropSql = `INSERT INTO has VALUE(?,?)`;
                      var addCropBody = [id, property.crop];
                      connection.query(addCropSql, addCropBody, function(err3, res3){
                        if(err3) 
                          console.log('err1 => ',err3);
                      });
                    return self_res.status(200).json({Error: false, success: true, errors: errors}); 
                  }
                });
              }
            });
          }
        })
      }
    })
  }
  else {
    return res.status(200).json({
      Error: true,
      success: false,
      errors: errors
    });
  }
});



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


router.post('unLogVisitHistory/:username/:propid', (req, response) => {
  const errors = {};
  var sql = "DELETE FROM Visits WHERE Username = (?) AND PropertyID = (?) ";
  var body = [req.params.username, req.params.propid];
  connection.query(sql, body, function(err, res) {
    if (err) {
      return res.status(200).json({Error: true, success: false, errors: errors});
    } else {
      
    }
  })
});

router.post('logVisitHistory/:username/:propid/:rating', (req, response) => {
  const errors = {};
  var sql = "INSERT INTO Visit VALUES(?, ?, ?, ?)";
  var date = new Date((new Date).getTime());
  var dt = date.getFullYear().toString() + "-"+(date.getMonth() + 1).toString().padStart(2,"0") + "-"+ date.getMonth().toString().padStart(2,"0");
  // var formatted = dt.format('')
  var body = [req.params.username, req.params.propid, dt, req.params.rating];
  connection.query(sql, body, function(err, res) {
    if (err) {
      return res.status(200).json({Error: true, success: false, errors: errors});
    } else {
      
    }
  })
});



