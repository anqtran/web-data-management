import React, { PropTypes } from 'react'; import { Link } from 'react-router';
import { Card, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';


const AdminDashBoardForm = ({
}) => (
  <Card className="container">
    <form>
      <h2 className="card-heading">Welcome Admin</h2>


      <div className="button-line">
        <RaisedButton type="view_visitors_list" label="View Visitors List" primary 
                      href="./ViewVisitorsList"/>
      </div>

      <div className="button-line">
        <RaisedButton type="view_owners_list" label="View Owners List" primary 
                      href="./ViewOwnersList"/>
      </div>

      <div className="button-line">
        <RaisedButton type="view_confirmed_properties" label="View Confirmed Properties" primary 
                      href="./ViewConfirmedProperties"/>
      </div>

      <div className="button-line">
        <RaisedButton type="view_unconfirmed_properties" label="View Unconfirmed Properties" primary 
                      href="./ViewUnconfirmedProperties"/>
      </div>

      <div className="button-line">
        <RaisedButton type="view_approved_animals_and_crops" label="View Approved Animals and Crops" primary 
                      href="./ViewApprovedAnimalsandCrops"/>
      </div>

      <div className="button-line">
        <RaisedButton type="view_pending_animals_and_crops" label="View Pending Animals and Crops" primary 
                      href="./ViewPendingAnimalsandCrops"/>
      </div>

      <div className="button-line">
        <RaisedButton type="logout" label="Logout" primary         
                      href="../login"/>
      </div>

    </form>
  </Card>
);

AdminDashBoardForm.propTypes = {
};

export default AdminDashBoardForm;
