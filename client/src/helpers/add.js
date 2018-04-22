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

      if (res.data.Error) {
        resolve(res.data)
      } else {
        // console.log(res);
        // var data = JSON.parse(res.data.properties);
        console.log(res.data.properties);
        resolve(res.data.properties);
      }
    })
  })
}

export function addOwner(property, user) {
  console.log('property => ',property);
  console.log('user => ',user);
  return new Promise(function(resolve, reject) {
    axios.post(`/add/addOwner/`,
    {
      property : property,
      user: user
    }) 
    .then(function (res) {

      if (res.data.Error) {
        console.log('res.data.errors => ',res.data);
        resolve(res.data)
      } else {
        // console.log(res);
        // var data = JSON.parse(res.data.properties);
        console.log(res.data.properties);
        resolve(res.data.properties);
      }
    })
  })
}
