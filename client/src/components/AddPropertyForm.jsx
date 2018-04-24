import React, { PropTypes } from 'react';
import { Link } from 'react-router-dom';
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

const AddPropertyForm = ({
  onSubmit,
  onChange,
  selectFieldOnChange,
  disabled,
  property,
  errors,
  animals,
  crops,
}) => (
  <Card className="container">
    <form action="/" onSubmit={onSubmit} >
      <h2 className="card-heading">ADD NEW PROPERTY</h2>
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
          floatingLabelText="Property Type"
          name="propType"
          errorText={errors.propType}
          onChange={(e, index, value) => selectFieldOnChange(e, index, value, "propType")}
          value ={property.propType}
        >
          <MenuItem  value={"FARM"} primaryText="Farm" />
          <MenuItem  value={"ORCHARD"} primaryText="Orchard" />
          <MenuItem  value={"GARDEN"} primaryText="Garden" />
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
          value ={property.animal}
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
          value ={property.crop}
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
        <RaisedButton type="submit" 
          name= "add" 
          label="Add Property" primary />
        <RaisedButton 
          name= "cancel" 
          label="Cancel" 
          primary  />
      </div>



    </form>
  </Card>

);

AddPropertyForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  selectFieldOnChange : PropTypes.func.isRequired,
  disabled: PropTypes.any.isRequired,
  errors: PropTypes.object.isRequired,
  property: PropTypes.object.isRequired,
  animals: PropTypes.array.isRequired,
  crops: PropTypes.array.isRequired,
};

export default AddPropertyForm;
