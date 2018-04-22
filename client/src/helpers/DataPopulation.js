import React, {PropTypes} from 'react';
import axios from 'axios';


export function getOwnerProperties(Username) {
  console.log('Username => ',Username);
  return new Promise(function(resolve, reject) {
    axios.get(`/populate/getOwnerProperties/${Username}`)
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


export function getFarmItems() {
  console.log('function is running => ');
  return new Promise(function(resolve, reject) {
    axios.get(`/populate/getFarmItem/`)
    .then(function (res) {
      console.log("HElloooo");

      if (res.data.Error) {
        console.log('res.data.errors => ',res.data.errors);
        reject(res.data.Error)
      } else {
        console.log(res.data.properties);
        resolve(res.data.properties);
      }
    })
  })
}
