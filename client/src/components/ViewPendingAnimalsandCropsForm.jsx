import React, { PropTypes } from 'react'; import { Link } from 'react-router';
import { Card, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import PendingPendingItemsTableStore from '../AdminTableManagement/PendingApprovedItemsTableStore.js';
const ViewPendingAnimalsandCropsForm = ({
  onSubmit,
  onChange,
  errors,
  user
}) => (
  <Card className="container">
    <form>
      <h2 className="card-heading">Welcome Admin</h2>
      <h2 className="card-heading">All Pending Animals / Crops</h2>

      <PendingPendingItemsTableStore />
      {errors.summary && <p className="error-message">{errors.summary}</p>}


      <div className="button-line">
        <RaisedButton type="Back" label="Logout" primary         
                      href="http://localhost:3000/"/>
      </div>

    </form>
  </Card>
);

ViewPendingAnimalsandCropsForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired
};

export default ViewPendingAnimalsandCropsForm;