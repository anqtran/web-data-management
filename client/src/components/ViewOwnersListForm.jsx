import React, { PropTypes } from 'react'; import { Link } from 'react-router';
import { Card, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import OwnerTableStore from '../AdminTableManagement/OwnerTableStore'


const ViewOwnersListForm = ({
  errors,
  name
}) => (
  <Card className="container">
    <form>
      <h2 className="card-heading">Welcome Admin</h2>
      <h2 className="card-heading">All Owners In System</h2>
      <OwnerTableStore />
      {errors.summary && <p className="error-message">{errors.summary}</p>}



      <div className="button-line">
        <RaisedButton type="logout" label="Back" primary         
                      href="http://localhost:3000/"/>
      </div>

    </form>
  </Card>
);

ViewOwnersListForm.propTypes = {
  errors: PropTypes.object.isRequired,
};

export default ViewOwnersListForm;
