import React, {PropTypes} from 'react';
import axios from 'axios';


export function getOwnerProperties(Username) {
  return new Promise(function(resolve, reject) {
    axios.get(`/populate/getOwnerProperties/${Username}`)
    .then(function (res) {
      if (res.data.Error) {
        reject(res.data.Error)
      } else {
        resolve(res.data.properties);
      }
    })
  })
}

export function getOwnerOtherProperties(Username) {
  return new Promise(function(resolve, reject) {
    axios.get(`/populate/getOwnerOtherProperties/${Username}`)
    .then(function (res) {
      if (res.data.Error) {
        reject(res.data.Error)
      } else {
        resolve(res.data.properties);
      }
    })
  })
}


export function getAllProperties() {
  return new Promise(function(resolve, reject) {
    axios.get(`/populate/getAllProperties`)
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

export function getPropertyItems(propertyID) {
  console.log('function is running => ');
  return new Promise(function(resolve, reject) {
    axios.get(`/populate/getProperty/${propertyID}`)
    .then(function (res) {
      if (res.data.Error) {
        console.log('res.data.errors => ',res.data.errors);
        reject(res.data.Error)
      } else {
        console.log(res.data.properties);
        console.log('res.data.propInfo => ',res.data.propInfo);

        resolve([res.data.properties, res.data.propInfo, res.data.farmItems]);
      }
    })
  })
}


export function getVisitHistory(Username) {
  console.log('Visitor is ', Username);
  return new Promise(function(resolve, reject) {
    axios.get(`/populate/getVisitHistory/${Username}`)
    .then(function (res) {
      console.log("Ahihihihihihiiiiiii");
      console.log(res);
      console.log('res.data => ',res.data);
      console.log('res.data.Error => ',res.data.Error);
      if (res.data.Error) {
        console.log('res.data.errors => ',res.data.errors);
        reject(res.data.Error)
      } else {
        resolve(res.data.visitHistory);
      }
    })
  })
}

export function getLogHistory(Username, PropID) {
  console.log('Visitor is ', Username);
  return new Promise(function(resolve, reject) {
    axios.get(`/populate/getVisitHistory/${Username}/${PropID}`)
    .then(function (res) {
      console.log("Ahihihihihihiiiiiii");
      console.log(res);
      console.log('res.data => ',res.data);
      console.log('res.data.Error => ',res.data.Error);
      if (res.data.Error) {
        console.log('res.data.errors => ',res.data.errors);
        reject(res.data.Error)
      } else {
        resolve(res.data.visitLog);
      }
    })
  })
}

export function getDetailProperty(name) {
  console.log('function getDetailProperty is running => ');
  console.log('Property is ', name);
  return new Promise(function(resolve, reject) {
    axios.get(`/populate/getDetailProperty/${name}`)
    .then(function (res) {
      console.log("asdkadfbs");

      if (res.data.Error) {
        console.log('res.data.errors => ',res.data.errors);
        reject(res.data.Error)
      } else {
        // console.log(res);
        // var data = JSON.parse(res.data.properties);
        console.log(res.data.detailProperty);
        resolve([res.data.detailProperty, res.data.animals, res.data.crops]);
      }
    })
  })
}

// export function getVisitHistory(Username) {
//   console.log('function getVisitHistory is running => ');
//   console.log('Visitor is ', Username);
//   return new Promise(function(resolve, reject) {
//     axios.get(`/populate/getVisitHistory/${Username}`)
//     .then(function (res) {
//       console.log("Ahihihihihihiiiiiii");

//       if (res.data.Error) {
//         console.log('res.data.errors => ',res.data.errors);
//         reject(res.data.Error)
//       } else {
//         // console.log(res);
//         // var data = JSON.parse(res.data.properties);
//         console.log(res.data.properties);
//         resolve(res.data.properties);
//       }
//     })
//   })
// }


// export function getDetailProperty(name) {
//   console.log('function getDetailProperty is running => ');
//   console.log('Property is ', Username);
//   return new Promise(function(resolve, reject) {
//     axios.get(`/populate/getDetailProperty/${name}`)
//     .then(function (res) {
//       console.log("Ahihihihihihiiiiiii");

//       if (res.data.Error) {
//         console.log('res.data.errors => ',res.data.errors);
//         reject(res.data.Error)
//       } else {
//         // console.log(res);
//         // var data = JSON.parse(res.data.properties);
//         console.log(res.data.properties);
//         resolve(res.data.properties);
//       }
//     })
//   })
// }
