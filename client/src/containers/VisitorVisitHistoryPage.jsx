import React, { PropTypes } from 'react';
// import VisitorVisitHistoryForm from '../components/VisitorVisitHistoryForm.jsx';
import axios from 'axios';
// import { getVisitHistory } from '../helpers/DataPopulation';s
// import { Redirect } from 'react-router';
// import { Router } from 'react-router';
import { browserHistory } from 'history';
// import { Link } from 'react-router'; 
// function getItems() {
//     const products = [];
//     for (let i = 0; i < 12; i++) {
//       const id = "Property " + i;
//       products.push({
//         ID: i,
//         Name: id,
//         Address: id + ' co dia chi laaaaaaa',
//         City: 'Atlanta ' + i ,
//         Zip: 11110,
//         Size: i,
//         PropertyType: 'la dat ne ' + i,
//         IsPublic: i > 2,
//         IsCommercial: i < 2,
//         Owner: 'Nguyen Thi Buoi',
//         rating: i / 0.5,
//         visit: i
//       });
//     }
//     return products;
//   }
class VisitorVisitHistoryPage extends React.Component {

  /**
   * Class constructor.
   */
  constructor(props) {
    super(props);

    // set the initial component state
    this.state = {
      errors: {},
      data:[],
      select: null
    };

    // this.processForm = this.processForm.bind(this);
    // this.changeUser = this.changeUser.bind(this);

    this.onViewProperty = this.onViewProperty.bind(this);
    this.onAddSelectedRow = this.onAddSelectedRow.bind(this);
  }

  // componentWillMount(){
  //   var self = this;
  //   getVisitHistory('').then(function(items) {
  //       console.log("Items:" + JSON.stringify(items))
  //       self.setState( {
  //         data: items
  //       })
  //     console.log('items IMPORTANTTTT => ',self.state.data);

  //     })
  //     // console.log("data mouted",self.state.data);
  // }


  // /**
  //  * Process the form.
  //  *
  //  * @param {object} event - the JavaScript event object
  //  */
  // processForm(event) {
  //   // prevent default action. in this case, action is the form submission event
  //   var self = this;
  //   event.preventDefault();
  //   axios.post('/auth/VisitorVisitHistory', {
  //     user : this.state.user
  //   })
  //   .then(function (res) {
  //     // window.location.href="/thankyou"
  //     console.log('res => ',res);
  //     if (res.data.Error) {
  //       console.log('res.data.errors => ',res.data.errors);
  //       self.setState({
  //        errors: res.data.errors
  //       });
  //     } else {
  //       //if success
  //       // TO-DO need to check and route the role
  //       const user = res.data.user;
  //       const type = user.UserType;
  //       const username = user.Username;
  //       self.setState({redirect:true});
  //       console.log('self.props => ',self.props);
  //       if (type == "OWNER") {
  //       }  
  //     }
  //   })
  // }

  // /**
  //  * Change the user object.
  //  *
  //  * @param {object} event - the JavaScript event object
  //  */
  // changeUser(event) {
  //   const field = event.target.name;
  //   const user = this.state.user;
  //   user[field] = event.target.value;

  //   this.setState({
  //     user
  //   });
  // }
////////////////////


onViewProperty() {
  if (this.state.select !== null) {
    alert("View Property is working!!!!");
    // console.log(row);
    // var self = this;
    // getDetailProperty(row).then(function(items) {
    //     console.log("Items:" + JSON.stringify(items))
    //     self.setState( {
    //       data: items
    //     })
    //   console.log('items IMPORTANTTTT => ',self.state.data);

    //   })
      // console.log("data mouted",self.state.data);
  }
  
}

onAddSelectedRow(row) {
  console.log(this.state.select === row);
  if (this.state.select === row) {
    this.setState({
      select: null
    });
  } else {
    this.setState({
      select: row
    });
  }
}


// /////////////////
  remote(remoteObj) {
    // Only cell editing, insert and delete row will be handled by remote store
  //   remoteObj.cellEdit = true;
    remoteObj.insertRow = true;
    return remoteObj;
  }

/////////////


  /**
   * Render the component.
   */
  render() {
    // const selectRow = {
    //   mode: 'radio',
    //   bgColor: '#4285F4',
    //   hideSelectColumn: true,
    //   clickToSelect: true,
    //   onSelect: this.props.onAddSelectedRow

    // };
      return (
      <VisitorVisitHistoryForm
        onViewProperty={ this.onViewProperty}
        onAddSelectedRow={ this.onAddSelectedRow}

        // onSubmit={this.processForm}
        // onChange={this.changeUser}
        errors={this.state.errors}
        data={this.state.data}
      />
    );
  }

}

export default VisitorVisitHistoryPage;
