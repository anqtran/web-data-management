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

router.get(`/getAllProperties/`, (req, response) => {
const errors = {};
    var sql =  `SELECT   P.Name, P.Street, P.City, P.Zip, P.Size, P.PropertyType, P.IsPublic, P.IsCommercial, P.ID, temp.numberofVisit, temp.avgRating 
 FROM     Property AS P LEFT JOIN
        ( SELECT    COUNT(V.propertyID) AS numberOfVisit, AVG(V.Rating) AS avgRating, P.ID
          FROM    property AS P INNER JOIN visit AS V
          ON        P.ID =  V.PropertyID 
          GROUP BY P.ID ) AS temp
                      ON        P.ID =  temp.ID
 WHERE P.ApprovedBy IS NOT NULL;`;
    connection.query(sql, function(err,res){
      console.log('sql => ',sql);
       if(err){
        console.log('err => ',err);
        return errors;
       } else {
          // console.log('res => ',res);
          var data = JSON.parse(JSON.stringify(res));
          // console.log('data => ',data);
          // data = [];
          console.log('data => ',data);
          return response.json({"Error": false, "Message": "Success", "properties": data});
       }
    });
});






router.get(`/getFarmItem/`, (req, response) => {
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


router.get(`/getProperty/:propID`, (req, response) => {
  let id = req.params.propID;
  console.log('ggeofrkaiejfia');
  const errors = {};
    var sql = `SELECT Name, Type FROM FarmItem WHERE IsApproved = 1;`
    connection.query(sql, function(err,res){
       if(err){
        return errors;
       } else {
          var rawData = JSON.parse(JSON.stringify(res));
          var animals = [];
          var gardenItems = [];
          var orchardItems = [];
          var propInfo = {};
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
          var propSql = `SELECT * FROM property WHERE ID = (?);`
          var propBody = id;
          connection.query(propSql,propBody, function(err1,response1){
                 if(err1){
                  console.log('err1 => ',err1);
                  return errors;
                 } else {
                    propInfo = response1[0];
                    var farmSQl = `SELECT ItemName FROM has WHERE PropertyID = (?);`
                    connection.query(farmSQl, id, function(err2,response2){
                      console.log('err2 => ',err2);
                      if (!err2) {
                        console.log('response2 => ',response2);
                        //  LATER 
                        return response.json({"Error": false, "Message": "Success", "properties": data, "propInfo": response1[0], "farmItems": response2});
                        //
                      }
                    })
                 }
              });
         }
    });




});



router.get(`/getVisitHistory/:username`, (req, response) => {
  console.log('req.param.username => ',req.params.username);
  const errors = {};
  var sql = `SELECT P.Name, V.VisitDate, V.Rating FROM (Property AS P INNER JOIN Visit AS V ON P.ID = V.PropertyID) WHERE V.Username = (?) ORDER BY P.Name;`
  var body = req.params.username;
  connection.query(sql, body, function(err,res){
      console.log('sql => ',sql);
       if(err){
        console.log('err => ',err);
        return errors;
       } else {
          console.log(res);
          return response.json({"visitHistory": res});
       }
    });
});


router.get(`/getDetailProperty/:name`, (req, response) => {
  console.log('req.param.name => ',req.params.name);
  const errors = {};
  var sql = `SELECT 	P.Name,  U.Username, U.Email, P.street, P.City, P.Zip, P.Size, P.PropertyType, P.isPublic, P.isCommercial, P.ID, P.ApprovedBy, temp1.Visits, temp1.avgRating, H.ItemName
            FROM Property AS P
            LEFT JOIN has AS H
              ON P.ID = H.PropertyID
            LEFT JOIN user as U
              ON U.Username = P.owner
            LEFT JOIN (SELECT   COUNT(V.propertyID ) AS Visits, AVG(V.Rating) AS avgRating, P.ID
                  FROM 		property AS P INNER JOIN visit AS V
                  ON			P.ID =  V.PropertyID
                  GROUP BY P.ID )	AS temp1
                  ON 				P.ID =  temp1.ID
            WHERE P.Name = (?) and P.ApprovedBy IS NOT NULL; `;
  var body = req.param.name;
  connection.query(sql, body, function(err,res){
      console.log('sql => ',sql);
       if(err){
        console.log('err => ',err);
        return errors;
       } else {
          console.log(res);
          var rawData = JSON.parse(JSON.stringify(res));

          return rawData;
       }
    });
});


router.get(`/deleteProperty/:propertyId`, (req, response) => {
  var id = req.params.propertyId;
  var sql = `DELETE FROM Property WHERE ID = (?)`
  connection.query(sql, id, function(err,res){
    
     if(err){
      console.log('delete err => ',err);   
     } else {
      console.log('delete success');  
     }
     return null;
  });
})


module.exports = router;


