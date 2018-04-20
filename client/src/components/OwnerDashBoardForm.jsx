import React, { PropTypes } from 'react'; import { Link } from 'react-router';
import { Card, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';


const OwnerDashBoardForm = ({
  onSubmit,
  onChange,
  errors,
  user
}) => (
  <Card className="container">
    <form action="/" onSubmit={onSubmit}>
      <h2 className="card-heading">Welcome Owner1</h2>

      {errors.summary && <p className="error-message">{errors.summary}</p>}

      <div className="button-line">
        <RaisedButton type="manage_property" label="Manage Property" primary 
                      href="./manageproperty"/>
      </div>

      <div className="button-line">
        <RaisedButton type="add_property" label="Add Property" primary 
                      href="./addproperty"/>
      </div>

      <div className="button-line">
        <RaisedButton type="view_other_properties" label="View Other Properties" primary 
                      href="./allothervalidproperties"/>
      </div>

      <div className="button-line">
        <RaisedButton type="logout" label="Logout" primary         
                      href="../login"/>
      </div>

    </form>
  </Card>
);

OwnerDashBoardForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired
};

export default OwnerDashBoardForm;
