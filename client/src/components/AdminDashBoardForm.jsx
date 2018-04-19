import React, { PropTypes } from 'react'; import { Link } from 'react-router';
import { Card, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';


const AdminDashBoardForm = ({
  onSubmit,
  onChange,
  errors,
  user
}) => (
  <Card className="container">
    <form action="/" onSubmit={onSubmit}>
<<<<<<< HEAD
      <h2 className="card-heading">Login</h2>

      {errors.summary && <p className="error-message">{errors.summary}</p>}

      <div className="field-line">
        <TextField
          floatingLabelText="Email"
          name="email"
          errorText={errors.email}
          onChange={onChange}
          value={user.email}
        />
      </div>

      <div className="field-line">
        <TextField
          floatingLabelText="Password"
          type="password"
          name="password"
          onChange={onChange}
          errorText={errors.password}
          value={user.password}
        />
      </div>

      <div className="button-line">
        <RaisedButton type="submit" label="Log in" primary />
      </div>

      <CardText>Don't have an account?</CardText>
      <CardText><Link to={'signup/owner'}>Create account for owner</Link></CardText>
      <CardText><Link to={'/signup/visitor'}>Create account for visitor</Link></CardText>
=======
      <h2 className="card-heading">Welcome Admin1</h2>

      {errors.summary && <p className="error-message">{errors.summary}</p>}

      <div className="button-line">
        <RaisedButton type="view_visitors_list" label="View Visitors List" primary />
      </div>

      <div className="button-line">
        <RaisedButton type="view_owners_list" label="View Owners List" primary />
      </div>

      <div className="button-line">
        <RaisedButton type="view_confirmed_properties" label="View Confirmed Properties" primary />
      </div>

      <div className="button-line">
        <RaisedButton type="view_unconfirmed_properties" label="View Unconfirmed Properties" primary />
      </div>

      <div className="button-line">
        <RaisedButton type="view_approved_animals_and_crops" label="View Approved Animals and Crops" primary />
      </div>

      <div className="button-line">
        <RaisedButton type="view_pending_animals_and_crops" label="View Pending Animals and Crops" primary />
      </div>

      <div className="button-line">
        <RaisedButton type="logout" label="Logout" primary />
      </div>

>>>>>>> 4a0ab87314b5b0d9c3df2241f13d7d09f02648ed
    </form>
  </Card>
);

AdminDashBoardForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired
};

export default AdminDashBoardForm;
