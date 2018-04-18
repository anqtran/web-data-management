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

const OwnerSignUpForm = ({
  onSubmit,
  onChange,
  errors,
  user,
}) => (

  <Card className="container">
    <form action="/" onSubmit={onSubmit}>
      <h2 className="card-heading">Sign Up</h2>

      {errors.summary && <p className="error-message">{errors.summary}</p>}

      <div className="field-line">
        <TextField
          floatingLabelText="Name"
          name="name"
          errorText={errors.name}
          onChange={onChange}
          value={user.name}
        />
      </div>

      <div className="field-line">
        <TextField
          floatingLabelText="Email"
          name="email"
          errorText={errors.email}
          onChange={onChange}
          value={user.email}
        />
      </div>

      <div className="field-line">
        <TextField
          floatingLabelText="Password"
          type="password"
          name="password"
          onChange={onChange}
          errorText={errors.password}
          value={user.password}
        />
      </div>

      <div className="field-line">
        <TextField
          floatingLabelText="Confirm Password"
          type="password"
          name="confirmPassword"
          onChange={onChange}
          errorText={errors.password}
          value={user.confirmPassword}
        />
      </div>

      <div className="field-line">
        <TextField
          floatingLabelText="Property Name"
          type="text"
          name="propertyName"
          onChange={onChange}
          errorText={errors.propertyName}
          value={user.confirmPassword}
        />
      </div>

      <div className="field-line">
        <TextField
          floatingLabelText="Street Address"
          type="text"
          name="streetAddress"
          onChange={onChange}
          errorText={errors.streetAddress}
          value={user.streetAddress}
        />
      </div>

      <div className="field-line">
        <SelectField
          floatingLabelText="Property Type"
           name="propType"
          errorText={errors.propType}
          onChange={onChange}
          value ={user.propType}
        >
          <MenuItem value={1} primaryText="Farm" />
          <MenuItem value={2} primaryText="Orchard" />
          <MenuItem value={3} primaryText="Garden" />
        </SelectField>
      </div>

      <div className="button-line">
        <RaisedButton type="submit" label="Create New Account" primary />
      </div>

      <CardText>Already have an account? <Link to={'/login'}>Log in</Link></CardText>
    </form>
  </Card>
);

OwnerSignUpForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired
};

export default OwnerSignUpForm;
