const express = require('express');
const validator = require('validator');
const router = new express.Router();
var connection = require('./connected');
/**
 * Validate the sign up form
 *
 * @param {object} payload - the HTTP body message
 * @returns {object} The result of validation. Object contains a boolean validation result,
 *                   errors tips, and a global message for the whole form.
 */
console.log('go to this file => ');
router.post('/animal', (req, res) => {
const errors = {};
    var currentState = req.body;
    var sql  = "SELECT Name FROM FarmItem WHERE  Type = 'Animal' AND IsApproved = 1;";
    console.log('sql => ',sql);
    connection.query(sql, function(err,res){
       if(err){
        errors.animal = 'Cannot populate animals';
        console.log("errrorrrorroro");
        return res.status(200).json({Error: true, success: false, errors: errors});
       } else {
          console.log('res => ',res);
          res = res[0];
          console.log('currentState => ',currentState);
          currentState.animals = res;
       }
    });
});

// router.post('/visitorsignup', (req, res) => {
//   const errors = {};
//   var user = req.body.user;
//   console.log(user);
//   var hash = bcrypt.hashSync(user.password, salt);
//   const validationResult = validateSignupForm(req.body.user);
//   // if the input is valid
//   if (validationResult.success) {
//     //run query
//     console.log("validation success");
//     var sql  = 'INSERT INTO user VALUES (?, ?, ?, ?)';
//     //adding hash password
//     var body = [user.name, user.email, hash, user.usertype];
//     connection.query(sql, body, function(err){
//        if(err){
//         errors.email = 'Email is already taken.';
//         console.log("user duplicated");
//         return res.status(200).json({Error: true, success: false, errors: errors});
//        } else {
//           return res.json({"Error": false, "Message": "Success"})
//        }
//     });
//   }
//   else {
//     console.log('validationResult => ',validationResult);
//     return res.status(200).json({
//       Error: true,
//       success: false,
//       message: validationResult.message,
//       errors: validationResult.errors
//     });
//   }
// });

module.exports = router;
