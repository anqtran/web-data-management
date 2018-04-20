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

var animals  = ["dog", "cat", "pig"];
var crops  = ["apple", "banana", "peach"];

const OwnerSignUpForm = ({
  onSubmit,
  onChange,
  selectFieldOnChange,
  errors,
  user,
  disabled,
  animals,
  crops
}) => (

  <Card className="container">
    <form action="/" onSubmit={onSubmit}>
      <h2 className="card-heading">Sign Up</h2>

      {errors.summary && <p className="error-message">{errors.summary}</p>}

      <div className="field-line">
        <TextField 
          className = "textfield"
          floatingLabelText="Name"
          name="name"
          errorText={errors.name}
          onChange={onChange}
          value={user.name}
        />
      </div>

      <div className="field-line">
        <TextField 
          className = "textfield"
          floatingLabelText="Email"
          name="email"
          errorText={errors.email}
          onChange={onChange}
          value={user.email}
        />
      </div>

      <div className="field-line">
        <TextField 
          className = "textfield"
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
          className = "textfield"
          floatingLabelText="Confirm Password"
          type="password"
          name="confirmPassword"
          onChange={onChange}
          errorText={errors.confirmPassword}
          value={user.confirmPassword}
        />
      </div>

      <div className="field-line">
        <TextField 
          className = "textfield"
          floatingLabelText="Property Name"
          type="text"
          name="propertyName"
          onChange={onChange}
          errorText={errors.propertyName}
          value={user.propertyName}
        />
      </div>

      <div className="field-line">
        <TextField 
          className = "textfield"
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
          className = "selectfield"
          floatingLabelText="Property Type"
          name="propType"
          errorText={errors.propType}
          onChange={(e, index, value) => selectFieldOnChange(e, index, value, "propType")}
          value ={user.propType}
        >
          <MenuItem  value={"Farm"} primaryText="Farm" />
          <MenuItem  value={"Orchard"} primaryText="Orchard" />
          <MenuItem  value={"Garden"} primaryText="Garden" />
        </SelectField>
      </div>

      <div className="field-line">
        <SelectField
          className = "selectfield"
          floatingLabelText="Animal"
          name="animal"
          disabled={disabled}
          errorText={errors.animal}
          onChange={(e, index, value) => selectFieldOnChange(e, index, value, "animal")}
          value ={user.animal}
        >
          {animals.map((animal, index) =>
            <MenuItem key={index} value={animal} primaryText={animal} />
          )}
        </SelectField>
      </div>


      <div className="field-line">
        <SelectField
          className = "selectfield"
          floatingLabelText="Crops"
          name="crop"
          errorText={errors.crop}
          onChange={(e, index, value) => selectFieldOnChange(e, index, value, "crop")}
          value ={user.crop}
        >
          {crops.map((crop, index) =>
            <MenuItem key={index} value={crop} primaryText={crop} />
          )}
        </SelectField>
      </div>

      <div className="field-line">
        <SelectField
          className = "selectfield"
          floatingLabelText="Public"
          name="public"
          errorText={errors.public}
          onChange={(e, index, value) => selectFieldOnChange(e, index, value, "public")}
          value ={user.public}
        >
          <MenuItem name="public" value={"1"} primaryText="Yes" />
          <MenuItem name="public" value={"0"} primaryText="No" />
        </SelectField>
      </div>

      <div className="field-line">
        <SelectField
          className = "selectfield"
          floatingLabelText="Commercial"
          name="commercial"
          errorText={errors.commercial}
          onChange={(e, index, value) => selectFieldOnChange(e, index, value, "commercial")}
          value ={user.commercial}
        >
          <MenuItem name="public" value={"1"} primaryText="Yes" />
          <MenuItem name="public" value={"0"} primaryText="No" />
        </SelectField>
      </div>

 <div className="button-line">
        <RaisedButton type="submit" label="Create New Account" primary 
                      href="/login"/>
      </div>

      <CardText>Already have an account? <Link to={'/login'}>Log in</Link></CardText>
    </form>
  </Card>

);

OwnerSignUpForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  selectFieldOnChange : PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  animals: PropTypes.object.isRequired,
  crops: PropTypes.object.isRequired

};

export default OwnerSignUpForm;
