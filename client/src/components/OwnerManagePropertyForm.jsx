import React, { PropTypes } from 'react'; import { Link } from 'react-router';
import { Card, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import Chip from 'material-ui/Chip';

const OwnerManagePropertyForm = ({
  onSubmit,
  onChange,
  errors,
  user,
  property,
  animalsChipData,
  cropsChipData,
  styles,
  AnimalshandleRequestDelete,
  CropshandleRequestDelete,
  renderCropsChip,
  disabled,
  animals,
  crops,
  selectFieldOnChange,
  deleteProperty,
  addItemProperty,
  saveProperty
}) => (
  <Card className="container">
    <form>
      <h2 className="card-heading">Welcome</h2>

      {errors.summary && <p className="error-message">{errors.summary}</p>}

      <div className="field-line">
        <TextField
          className = "textfield"
          floatingLabelText="Property Name"
          type="text"
          name="Name"
          onChange={onChange}
          errorText={errors.Name}
          value={property.Name}
        />
      </div>


      <div className="field-line">
        <TextField
          className = "textfield"
          floatingLabelText="Street Address"
          type="text"
          name="streetAddress"
          onChange={onChange}
          errorText={errors.Street}
          value={property.Street}
        />
      </div>

      <div className="field-line">
        <TextField
          className = "textfield"
          floatingLabelText="City"
          type="text"
          name="city"
          onChange={onChange}
          errorText={errors.City}
          value={property.City}
        />
      </div>


      <div className="field-line">
        <TextField
          className = "textfield"
          floatingLabelText="Zip"
          type="text"
          name="zip"
          onChange={onChange}
          errorText={errors.Zip}
          value={property.Zip}
        />
      </div>

      <div className="field-line">
        <TextField
          className = "acres"
          floatingLabelText="Acres"
          type="text"
          name="acres"
          onChange={onChange}
          errorText={errors.Size}
          value={property.Size}
        />
      </div>

      <div className="field-line">
      <TextField
        floatingLabelText="ID"
        floatingLabelFixed={true}
        disabled = {true}
        defaultValue= {property.ID}
      />
      </div>

      <div className="field-line">
      <TextField
        floatingLabelText="Type"
        floatingLabelFixed={true}
        disabled = {true}
        type = "text"
        value= {property.PropertyType}
      />
      </div>

      <div className="field-line">
        <SelectField
          className = "selectfield"
          floatingLabelText="Is Public"
          type="text"
          name="public"
          errorText={errors.IsPublic}
          value ={property.IsPublic}                  
          onChange={(e, index, value) => selectFieldOnChange(e, index, value, 'IsPublic')}
        >
          <MenuItem name="public" value={1} primaryText="Yes" />
          <MenuItem name="public" value={0} primaryText="No" />
        </SelectField>
      </div>

      <div className="field-line">
        <SelectField
          className = "selectfield"
          floatingLabelText="Is Commercial"
          name="isCommercial"
          type="text"
          errorText={errors.IsCommercial}
          value= {property.IsCommercial}
          onChange={(e, index, value) => selectFieldOnChange(e, index, value, 'IsCommercial')}
        >
          <MenuItem name="isCommercial" value={1} primaryText="Yes"/>
          <MenuItem name="isCommercial" value={0} primaryText="No" />
        </SelectField>
      </div>


      <div style={styles.wrapper}>
        {cropsChipData.map(renderCropsChip, this)}
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

  <div className="button-line">
        <RaisedButton type="save_changes" label="Add Animal To Property" primary 
          onClick = {(e, index, value) => addItemProperty(e, index, value,property.animal)}
                      />
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

  <div className="button-line">
        <RaisedButton type="save_changes" label="Add Crop To Property" primary 
        onClick = {(e, index, value) => addItemProperty(e, index, value, property.crop)}
                      />
      </div>
  <div className="button-line">
        <RaisedButton type="save_changes" label="Delete Property" primary 
                onClick = {(e, index, value) => deleteProperty(e, index, value)}
                      href="http://localhost:3000/owner/dashboard"/>
      </div>
      <div className="button-line">
        <RaisedButton type="save_changes" label="Save Changes" primary 
         onClick = {(e, index, value) => saveProperty(e, index, value)}
                      href="./DashBoard"/>
      </div>

      <div className="button-line">
        <RaisedButton type="back" label="Back (Don't Save)" primary 
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
  selectFieldOnChange : PropTypes.func.isRequired,
  cropsChipData: PropTypes.array.isRequired,
  styles: PropTypes.object.isRequired,
  renderCropsChip:PropTypes.func.isRequired,
  disabled: PropTypes.any.isRequired,
  animals: PropTypes.array.isRequired,
  crops: PropTypes.array.isRequired,
  addItemProperty: PropTypes.func.isRequired,
  deleteProperty: PropTypes.func.isRequired,
  saveProperty: PropTypes.func.isRequired,
};

export default OwnerManagePropertyForm;