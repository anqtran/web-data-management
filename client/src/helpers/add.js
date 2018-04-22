import React, {PropTypes} from 'react';
import axios from 'axios';


export function addProperty(property) {
  console.log('property => ',property);
  return new Promise(function(resolve, reject) {
    axios.post(`/add/addProperty/`,
    {
      property : property
    }) 
    .then(function (res) {
      console.log("HElloooo");

      if (res.data.Error) {
        console.log('res.data.errors => ',res.data.errors);
        reject(res.data.Error)
      } else {
        // console.log(res);
        // var data = JSON.parse(res.data.properties);
        console.log(res.data.properties);
        resolve(res.data.properties);
      }
    })
  })
}
