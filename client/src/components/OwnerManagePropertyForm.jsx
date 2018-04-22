import React, { PropTypes } from 'react'; import { Link } from 'react-router';
import { Card, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
const OwnerManagePropertyForm = ({
  onSubmit,
  onChange,
  errors,
  user,
  property
}) => (
  <Card className="container">
    <form action="/" onSubmit={onSubmit}>
      <h2 className="card-heading">Welcome Owner1</h2>

      {errors.summary && <p className="error-message">{errors.summary}</p>}

      <div className="field-line">
        <TextField
          className = "textfield"
          floatingLabelText="Property Name"
          type="text"
          name="propertyName"
          onChange={onChange}
          errorText={errors.propertyName}
          value={property.propertyName}
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
          value={property.streetAddress}
        />
      </div>

      <div className="field-line">
        <TextField
          className = "textfield"
          floatingLabelText="City"
          type="text"
          name="city"
          onChange={onChange}
          errorText={errors.city}
          value={property.city}
        />
      </div>


      <div className="field-line">
        <TextField
          className = "textfield"
          floatingLabelText="Zip"
          type="text"
          name="zip"
          onChange={onChange}
          errorText={errors.zip}
          value={property.zip}
        />
      </div>

      <div className="field-line">
        <TextField
          className = "acres"
          floatingLabelText="Acres"
          type="text"
          name="acres"
          onChange={onChange}
          errorText={errors.acres}
          value={property.acres}
        />
      </div>

      <div className="field-line">
        <SelectField
          className = "selectfield"
          floatingLabelText="Public"
          name="public"
          errorText={errors.public}
          onChange={(e, index, value) => selectFieldOnChange(e, index, value, "public")}
          value ={property.public}
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
          value ={property.commercial}
        >
          <MenuItem name="public" value={"1"} primaryText="Yes"/>
          <MenuItem name="public" value={"0"} primaryText="No" />
        </SelectField>
      </div>


      <div className="button-line">
        <RaisedButton type="save_changes" label="Save Changes" primary 
                      href="./DashBoard"/>
      </div>

      <div className="button-line">
        <RaisedButton type="back" label="Back (Don't Save)" primary 
                      href="./DashBoard"/>
      </div>

      <div className="button-line">
        <RaisedButton type="delete_property" label="Delete Property" primary         
                      href="./DashBoard"/>
      </div>
    </form>
  </Card>
);

OwnerManagePropertyForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  property: PropTypes.object.isRequired,
  selectFieldOnChange : PropTypes.func.isRequired
};

export default OwnerManagePropertyForm;