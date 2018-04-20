import React, { PropTypes } from 'react'; import { Link } from 'react-router';
import { Card, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';


const VisitorPropertyDetailsForm = ({
  onSubmit,
  onChange,
  errors,
  user
}) => (
  <Card className="container">
    <form action="/" onSubmit={onSubmit}>
      <h2 className="card-heading">VisitorPropertyDetails</h2>

      {errors.summary && <p className="error-message">{errors.summary}</p>}

      {/*field-line?*/}
      {/*<div className="field-line"> */}
        <CardText>Name: </CardText>
        <CardText>Owner: </CardText>
        <CardText>Owner Email: </CardText>
        <CardText>Visits: </CardText>
        <CardText>Address: </CardText>
        <CardText>City: </CardText>
        <CardText>Zip: </CardText>
        <CardText>Size (acres): </CardText>
        <CardText>Avg. Rating: </CardText>
        <CardText>Type: </CardText>
        <CardText>Public: </CardText>
        <CardText>Commercial: </CardText>
        <CardText>ID: </CardText>
        <CardText>Crops: </CardText>
        {/*<cardText>Animals: </CardText>*/}
      {/*</div>*/}

      <div className="button-line">
        <RaisedButton type="logvisit" label="Log Visit" primary />
      </div>

      <div className="button-line">
        <RaisedButton type="back" label="Back" primary />
      </div>

    </form>
  </Card>
);

VisitorPropertyDetailsForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired
};

export default VisitorPropertyDetailsForm;
