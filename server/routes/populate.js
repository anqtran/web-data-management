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


router.get(`/getOwnerProperties/:name`, (req, response) => {
  console.log('req.param => ',req.param);
  var username = req.params.name;
const errors = {};
console.log("sdfsfd", username);
    var sql = ` SELECT    P.Name, P.street, P.City, P.Zip, P.Size, P.PropertyType, P.isPublic, P.isCommercial, P.ID, P.ApprovedBy, temp.numberofVisit, temp.avgRating ` +
                 `   FROM     Property AS P LEFT JOIN ` +
                ` (SELECT    COUNT(V.propertyID) AS numberOfVisit, ROUND(AVG(V.Rating),2) AS avgRating, P.ID ` +
                 `FROM    property AS P INNER JOIN visit AS V ` +
                 `ON        P.ID =  V.PropertyID AND P.owner = (?)` +
                  ` GROUP BY P.ID ) AS temp ` +
                         `ON         P.ID =  temp.ID ` +
                 `WHERE P.ApprovedBy IS NOT NULL AND P.owner = (?)` +
                 ` ORDER BY P.Name;`
    var body = [username, username];
    connection.query(sql, body, function(err,res){
      console.log('sql => ',sql);
       if(err){
        console.log('err => ',err);
        return errors;
       } else {
          // console.log('res => ',res);
          var data = JSON.parse(JSON.stringify(res));
          // console.log('data => ',data);
          // data = [];
          return response.json({"Error": false, "Message": "Success", "properties": data});
       }
    });
});

router.get(`/getFarmItem/`, (req, response) => {
  console.log('req.param => ',req.param);
  const errors = {};
    var sql = `SELECT Name, Type FROM FarmItem WHERE IsApproved = 1; `
    connection.query(sql, function(err,res){
      console.log('sql => ',sql);
       if(err){
        console.log('err => ',err);
        return errors;
       } else {
          // console.log('res => ',res);
          var rawData = JSON.parse(JSON.stringify(res));
          // console.log(rawData);
          // console.log('data => ',data);
          var animals = [];
          var gardenItems = [];
          var orchardItems = [];
          rawData.forEach((item) => {
            if (item.Type === 'ANIMAL') {
              animals.push(item.Name);
            } else {
              if (item.Type === 'FRUIT' || item.Type === 'NUT') {
                orchardItems.push(item.Name);
              } else {
                gardenItems.push(item.Name);
              }
            }
          })
          var data = [animals, gardenItems, orchardItems];
          console.log(data);
          return response.json({"Error": false, "Message": "Success", "properties": data});
       }
    });
});

module.exports = router;


