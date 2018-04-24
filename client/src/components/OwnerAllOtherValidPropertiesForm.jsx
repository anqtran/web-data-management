import React, { PropTypes } from 'react'; import { Link } from 'react-router';
import { Card, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import OwnerDashBoardTableForm from '../AdminTableManagement/OwnerDashBoardTableForm'

const OwnerAllOtherValidPropertiesForm = ({
  name
}) => (
  <Card className="container">
    <form>
      <h2 className="card-heading">Welcome Owner</h2>
      <h2 className="card-heading">All Other Valid Properties</h2>


      <OwnerDashBoardTableForm />
      <div className="button-line">
        <RaisedButton type="view_property_details" label="View Property Details" primary 
                      href="./propertydetails"/>
      </div>

      <div className="button-line">
        <RaisedButton type="back" label="Back" primary         
                      href= {"http://localhost:3000/dashboard/owner/" + name}/>
      </div>

    </form>
  </Card>
);

OwnerAllOtherValidPropertiesForm.propTypes = {
  name: PropTypes.string.isRequired
};

export default OwnerAllOtherValidPropertiesForm;
