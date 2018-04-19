import React, { PropTypes } from 'react';
import axios from 'axios';
import { Link } from 'react-router';
import { Card, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import OwnerSignUpForm from '../components/OwnerSignUpForm.jsx';

const styles = {
  customWidth: {
    width: 150,
  },
};


class OwnerSignUpPage extends React.Component {

  /**
   * Class constructor.
   */
  constructor(props) {
    super(props);

    // set the initial component state
    this.state = {
      errors: {},
      user: {
        email: '',
        name: '',
        password: '',
        confirmPassword:'',
        propertyName: '',
        streetAddress: '',
        city:'',
        zip:'',
        acres:'',
        propType: "Farm",
        animal:'',
        crop:'',
        public:'0',
        commercial:'0', 
        usertype: 'OWNER'
      }
    };

    this.processForm = this.processForm.bind(this);
    this.changeUser = this.changeUser.bind(this);
    this.changeSelectField  = this.changeSelectField.bind(this);
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

  changeSelectField(event, index, value, field) {
    const user = this.state.user;
    console.log('field => ',field);
    user[field] = value;
    console.log('user => ',user);
    console.log('user[field] => ',user[field]);
    this.setState({
      user : user
    });
  }

  /**
   * Process the form.
   *
   * @param {object} event - the JavaScript event object
   */
  processForm(event) {
    // prevent default action. in this case, action is the form submission event
    event.preventDefault();

    axios.post('/auth/signup', {
      user : this.state.user
    })
    .then(function (response) {
      console.log("response:", response);
    })
    .catch(function (error) {
      console.log("error:", error);
    });

  }

  /**
   * Render the component.
   */
  render() {
    return (

      <OwnerSignUpForm
        onSubmit={this.processForm}
        onChange={this.changeUser}
        selectFieldOnChange ={this.changeSelectField}
        errors={this.state.errors}
        user={this.state.user}
      />
    );
  }

}

export default OwnerSignUpPage;
