import React, { PropTypes } from 'react'; import { Link } from 'react-router';
import { Card, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import PropertyTableStore from '../AdminTableManagement/PropertyTableStore'

const ViewConfirmedPropertiesForm = ({
  errors,
}) => (
  <Card className="container">
    <form>
      <h2 className="card-heading">Welcome Admin</h2>
      <h2 className="card-heading">All Confirmed Properties</h2>

      <PropertyTableStore />
      {errors.summary && <p className="error-message">{errors.summary}</p>}


      <div className="button-line">
        <RaisedButton type="Back" label="Logout" primary         
                      href="http://localhost:3000/"/>
      </div>

    </form>
  </Card>
);

ViewConfirmedPropertiesForm.propTypes = {
  errors: PropTypes.object.isRequired
};


export default ViewConfirmedPropertiesForm;