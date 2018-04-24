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
  return new Promise(function(resolve, reject) {
    axios.post(`/add/addOwner/`,
    {
      property : property,
      user: user
    }) 
    .then(function (res) {

      if (res.data.Error) {
        console.log('resonve => ');
        resolve(res.data)
      } else {
        // console.log(res);
        // var data = JSON.parse(res.data.properties);
        console.log('addOwner is here => ');
        resolve(res.data);
      }
    })
  })
}


export function logVisitHistory(username, propid, rating) {
  return new Promise(function(resolve, reject) {
    console.log('log Visit is running ');
    axios.post(`/add/logVisitHistory/${username}/${propid}/${rating}`) 
    .then(function (res) {
      if (res.data.Error) {
        console.log('resonve => ');
        resolve(res.data)
      } else {
        // console.log(res);
        // var data = JSON.parse(res.data.properties);
        console.log('addOwner is here => ');
        resolve(res.data);
      }
    })
  })
}


export function unLogVisitHistory(username, propid) {
  return new Promise(function(resolve, reject) {
    axios.post(`/add/unLogVisitHistory/${username}/${propid}`) 
    .then(function (res) {

      if (res.data.Error) {
        console.log('resonve => ');
        resolve(res.data)
      } else {
        // console.log(res);
        // var data = JSON.parse(res.data.properties);
        console.log('addOwner is here => ');
        resolve(res.data);
      }
    })
  })
}

