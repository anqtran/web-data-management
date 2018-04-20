import React, { PropTypes } from 'react'; import { Link } from 'react-router';
import { Card, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';


const OwnerManagePropertyForm = ({
  onSubmit,
  onChange,
  errors,
  user
}) => (
  <Card className="container">
    <form action="/" onSubmit={onSubmit}>
      <h2 className="card-heading">Welcome Owner1</h2>

      {errors.summary && <p className="error-message">{errors.summary}</p>}

{/*      <div className="button-line">
        <RaisedButton type="submit_request" label="Submit Request" primary 
                      href="./DashBoard"/>
      </div>*/}

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
  user: PropTypes.object.isRequired
};

export default OwnerManagePropertyForm;