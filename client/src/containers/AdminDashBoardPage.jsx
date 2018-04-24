import React, { PropTypes } from 'react';
import AdminDashBoardForm from '../components/AdminDashBoardForm.jsx';
import {FlatButton, Card} from 'material-ui/RaisedButton';

class AdminDashBoard extends React.Component {

  /**
   * Class constructor.
   */
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <AdminDashBoardForm
      />
    );
  }

}
export default AdminDashBoard;

