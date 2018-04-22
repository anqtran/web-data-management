import React, { PropTypes } from 'react';
import VisitorPropertyDetailsForm from '../components/VisitorPropertyDetailsForm.jsx';
import axios from 'axios';
import { Redirect } from 'react-router';
import { Router } from 'react-router';
import { browserHistory } from 'history';
import { Link } from 'react-router'; 
class VisitorPropertyDetailsPage extends React.Component {

  /**
   * Class constructor.
   */
  constructor(props) {
    super(props);

    // set the initial component state
    this.state = {
      errors: {},
      property: {}
    };

    this.processForm = this.processForm.bind(this);
    this.changeUser = this.changeUser.bind(this);
  }

  /**
   * Process the form.
   *
   * @param {object} event - the JavaScript event object
   */
  processForm(event) {
    // prevent default action. in this case, action is the form submission event
    var self = this;
    event.preventDefault();
    axios.post('/auth/login', {
      user : this.state.user
    })
    .then(function (res) {
      if (res.data.Error) {
        console.log('res.data.errors => ',res.data.errors);
        self.setState({
         errors: res.data.errors
        });
      } else {
        //if success
        // TO-DO need to check and route the role
        const user = res.data.user;
        const type = user.UserType;
        const username = user.Username;
        self.setState({redirect:true});
        console.log('self.props => ',self.props);
        // if (type == "OWNER") {
        //   return <Redirect to='/somewhere'/>;
        // }        

      }
    })
  }

  /**
   * Change the user object.
   *
   * @param {object} event - the JavaScript event object
   */
  changeUser(event) {
    const field = event.target.name;
    const user = this.state.user;
    user[field] = event.target.value;

    this.setState({
      user
    });
  }
//////////////////////
handleOpen = () => {
  this.setState({open: true});
};

handleClose = () => {
  this.setState({open: false});
};

actions = [
  <FlatButton
    label="Cancel"
    primary={true}
    onClick={this.handleClose}
  />,
  <FlatButton
    label="Submit"
    primary={true}
    keyboardFocused={true}
    onClick={this.handleClose}
  />,
];




//////////////////


  /**
   * Render the component.
   */
  render() {
        return (
      <VisitorPropertyDetailsForm
        onSubmit={this.processForm}
        onChange={this.changeUser}
        errors={this.state.errors}
        property={this.state.property}
      />
    );
  }

}

export default VisitorPropertyDetailsPage;
