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

export function addLogVisit(log) {
  console.log('log => ',log);
  return new Promise(function(resolve, reject) {
    axios.post(`/add/addLogVisit/${log.Username}/${log.PropName}/${log.rating}`
    // {
    //   property : property
    // }) 
  ).then(function (res) {
      console.log("HElloooo");

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

export function deleteLogVisit(log) {
  console.log('log => ',log);
  return new Promise(function(resolve, reject) {
    axios.post(`/add/deleteLogVisit/${log.Username}/${log.PropName}`
    // {
    //   property : property
    // }) 
  ).then(function (res) {
      console.log("HElloooo");

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

export function addApprovedItem(log) {
  console.log('log => ',log);
  return new Promise(function(resolve, reject) {
    axios.post(`/add/addApprovedItem/${log.name}/${log.type}/`
    // {
    //   property : property
    // }) 
  ).then(function (res) {
      console.log("HElloooo");

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

export function updateApprovedItem(log) {
  console.log('log => ',log);
  return new Promise(function(resolve, reject) {
    axios.post(`/add/updateApprovedItem/${log.name}/${log.type}/`
    // {
    //   property : property
    // }) 
  ).then(function (res) {
      console.log("HElloooo");

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

export function deleteVisitor(username) {
  console.log('log => ',username);
  return new Promise(function(resolve, reject) {
    axios.post(`/add/deleteVisitor/${username}/`
    // {
    //   property : property
    // }) 
  ).then(function (res) {
      console.log("HElloooo");

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

export function deleteOwner(username) {
  console.log('log => ',username);
  return new Promise(function(resolve, reject) {
    axios.post(`/add/deleteOwner/${username}/`
    // {
    //   property : property
    // }) 
  ).then(function (res) {
      console.log("HElloooo");

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