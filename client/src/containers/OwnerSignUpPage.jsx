import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { Card, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

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
        propType: 'Farm',
        aninmal:'',
        crop:'',
        public:'',
        commercial:'',
      }
    };

    this.processForm = this.processForm.bind(this);
    this.changeUser = this.changeUser.bind(this);
  }

  /**
   * Change the user object.
   *
   * @param {object} event - the JavaScript event object
   */
  changeUser(event, index, value) {
    console.log(event);
    console.log(event.target);
    //assign to user properties
    const field = event.target.name;
<<<<<<< HEAD
    const user = this.state.user;
    user['propType'] = event.target.innerText;
=======
    console.log("value is " + value);
    console.log("Field issss" + field);
    const user = this.state.user;
    user[field] = value;
    user['propType'] = event.target.innerText;

>>>>>>> 4a0ab87314b5b0d9c3df2241f13d7d09f02648ed
    this.setState(this.state.user);

    console.log(this.state.user.propType);
    console.log(this.state.user.name);
  }

  /**
   * Process the form.
   *
   * @param {object} event - the JavaScript event object
   */
  processForm(event) {
    // prevent default action. in this case, action is the form submission event
    event.preventDefault();

    // create a string for an HTTP body message
    const name = encodeURIComponent(this.state.user.name);
    const email = encodeURIComponent(this.state.user.email);
    const password = encodeURIComponent(this.state.user.password);
    const formData = `name=${name}&email=${email}&password=${password}`;

    // create an AJAX request
    const xhr = new XMLHttpRequest();
    xhr.open('post', '/auth/signup');
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.responseType = 'json';
    xhr.addEventListener('load', () => {
      if (xhr.status === 200) {
        // success

        // change the component-container state
        this.setState({
          errors: {}
        });

        console.log('The form is valid');
      } else {
        // failure

        const errors = xhr.response.errors ? xhr.response.errors : {};
        errors.summary = xhr.response.message;

        this.setState({
          errors
        });
      }
    });
    xhr.send(formData);
  }

  /**
   * Render the component.
   */
  render() {
    return (
<Card className="container">
    <form action="/" onSubmit={this.processForm}>
      <h2 className="card-heading">Sign Up</h2>

      {this.state.errors.summary && <p className="error-message">{errors.summary}</p>}

      <div className="field-line">
        <TextField
          floatingLabelText="Name"
          name="name"
          errorText={this.state.errors.name}
          onChange={this.changeUser}
          value={this.state.user.name}
        />
      </div>

      <div className="field-line">
        <TextField
          floatingLabelText="Email"
          name="email"
          errorText={this.state.errors.email}
          onChange={this.changeUser}
          value={this.state.user.email}
        />
      </div>

      <div className="field-line">
        <TextField
          floatingLabelText="Password"
          type="password"
          name="password"
          onChange={this.changeUser}
          errorText={this.state.errors.password}
          value={this.state.user.password}
        />
      </div>

      <div className="field-line">
        <TextField
          floatingLabelText="Confirm Password"
          type="password"
          name="confirmPassword"
          onChange={this.changeUser}
          errorText={this.state.errors.password}
          value={this.state.user.confirmPassword}
        />
      </div>

      <div className="field-line">
        <TextField
          floatingLabelText="Property Name"
          type="text"
          name="propertyName"
          onChange={this.changeUser}
          errorText={this.state.errors.propertyName}
          value={this.state.user.confirmPassword}
        />
      </div>

      <div className="field-line">
        <TextField
          floatingLabelText="Street Address"
          type="text"
          name="streetAddress"
          onChange={this.changeUser}
          errorText={this.state.errors.streetAddress}
          value={this.state.user.streetAddress}
        />
      </div>

      <div className="field-line">
        <SelectField
          floatingLabelText="Property Type"
          name="propType"
          errorText={this.state.errors.propType}
          onChange={this.changeUser}
          value ={this.state.user.propType}
        >
          <MenuItem value={"Farm"} primaryText="Farm" />
          <MenuItem value={"Orchard"} primaryText="Orchard" />
          <MenuItem value={"Garden"} primaryText="Garden" />
        </SelectField>
      </div>

      <div className="button-line">
        <RaisedButton type="submit" label="Create New Account" primary />
      </div>

      <CardText>Already have an account? <Link to={'/login'}>Log in</Link></CardText>
    </form>
  </Card>
    );
  }

}

export default OwnerSignUpPage;
