import React, { PropTypes } from 'react'; import { Link } from 'react-router';
import { Card, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';


const VisitorVisitHistoryForm = ({
  onSubmit,
  onChange,
  errors,
  user
}) => (
  <Card className="container">
    <form action="/" onSubmit={onSubmit}>
      <h2 className="card-heading">Welcome Admin1</h2>

      {errors.summary && <p className="error-message">{errors.summary}</p>}

      <div className="button-line">
        <RaisedButton type="view_property_details" label="View Property Details" primary 
                      href="./PropertyDetails"/>
      </div>

      <div className="button-line">
        <RaisedButton type="back" label="Back" primary         
                      href="./DashBoard"/>
      </div>

    </form>
  </Card>
);

VisitorVisitHistoryForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired
};

export default VisitorVisitHistoryForm;
