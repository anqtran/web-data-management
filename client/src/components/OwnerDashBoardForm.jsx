import React, { PropTypes } from 'react'; import { Link } from 'react-router';
import { Card, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import OwnerDashBoardTableForm from '../AdminTableManagement/OwnerDashBoardTableForm'


const OwnerDashBoardForm = ({
  errors,
  name
}) => (
  <Card className="container">
    <form>
      <h2 className="card-heading">Welcome Owner</h2>

      <OwnerDashBoardTableForm />
      {errors.summary && <p className="error-message">{errors.summary}</p>}


      <div className="button-line">
        <RaisedButton type="view_other_properties" label="View Other Properties" primary 
                      href={"./allothervalidproperties/" + name}/>
      </div>

      <div className="button-line">
        <RaisedButton type="logout" label="Logout" primary         
                      href="http://localhost:3000/"/>
      </div>

    </form>
  </Card>
);

OwnerDashBoardForm.propTypes = {
  errors: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired
};

export default OwnerDashBoardForm;
