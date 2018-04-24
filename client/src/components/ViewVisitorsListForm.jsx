import React, { PropTypes } from 'react'; import { Link } from 'react-router';
import { Card, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import VisitorTableStore from '../AdminTableManagement/VisitorTableStore'


const ViewVisitorListForm = ({
  errors,
  name
}) => (
  <Card className="container">
    <form>
      <h2 className="card-heading">Welcome Owner</h2>

      <VisitorTableStore />
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

ViewVisitorListForm.propTypes = {
  errors: PropTypes.object.isRequired,
};

export default ViewVisitorListForm;
